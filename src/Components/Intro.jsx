import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const Intro = ({ onComplete }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05070a); // --background
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 8000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // 1. Background Starfield
    const starGeo = new THREE.BufferGeometry();
    const starCount = 10000;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPos[i] = (Math.random() - 0.5) * 5000;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xe4e9f0, size: 3, transparent: true });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 2. Large Volumetric Galaxy Creator
    const createGalaxy = (colorHex) => {
      const group = new THREE.Group();
      const count = 10000; 
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3); 
      
      const MAX_GALAXY_RADIUS = 120;

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * MAX_GALAXY_RADIUS; 
        const spin = radius * 10;
        const angle = Math.random() * Math.PI * 2;
        const thickness = (1 - (radius / MAX_GALAXY_RADIUS)) * 10 + 2; 
        
        pos[i * 3] = Math.cos(angle + spin) * radius;
        pos[i * 3 + 1] = (Math.random() - 0.5) * thickness; 
        pos[i * 3 + 2] = Math.sin(angle + spin) * radius;

        // Radial explosion vectors
        const dirX = pos[i * 3];
        const dirY = pos[i * 3 + 1];
        const dist = Math.sqrt(dirX * dirX + dirY * dirY) || 1;

        velocities[i * 3] = (dirX / dist) * (Math.random() * 25 + 15);
        velocities[i * 3 + 1] = (dirY / dist) * (Math.random() * 25 + 15);
        // Base forward velocity - this will be multiplied by the 'lunge' state
        velocities[i * 3 + 2] = Math.random() * 200 + 150; 
      }
      
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
      
      const mat = new THREE.PointsMaterial({ 
        color: new THREE.Color(colorHex), 
        size: 0.3, 
        transparent: true, 
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      
      const points = new THREE.Points(geo, mat);
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(4, 32, 32), 
        new THREE.MeshBasicMaterial({ color: 0x9c45b5, transparent: true, opacity: 0.8 })
      );
      
      group.add(points, core);
      group.rotation.x = Math.PI * (25 / 180); 
      
      return { group, geo, mat, points, core };
    };

    const g1 = createGalaxy(0x9c45b5); 
    const g2 = createGalaxy(0x3FA68A); 
    scene.add(g1.group, g2.group);

    camera.position.set(0, 120, 500); 

    let state = { progress: 0, lunge: 0 };
    let collided = false;

    const timeline = gsap.timeline();

    // PHASE 1: ACCELERATED COLLISION
    timeline.to(state, {
      progress: 1,
      duration: 3,
      ease: "power2.in", 
      onUpdate: () => {
        const orbitRadius = 325 * (1 - state.progress);
        const angle = state.progress * Math.PI * 4;
        
        g1.group.position.set(Math.cos(angle) * orbitRadius, 40 * (1 - state.progress), Math.sin(angle) * orbitRadius);
        g2.group.position.set(Math.cos(angle + Math.PI) * orbitRadius, -40 * (1 - state.progress), Math.sin(angle + Math.PI) * orbitRadius);
        
        camera.lookAt(0, 0, 0);
      }
    });

    // PHASE 2: THE LUNGE & STORM (Particles rush at camera)
    timeline.to(state, {
      lunge: 1,
      duration: 1.8,
      ease: "expo.inOut",
      onStart: () => {
        collided = true; 
        g1.core.visible = g2.core.visible = false; 
      },
      onUpdate: () => {
        // Camera lunges deep into the screen
        camera.position.z -= state.lunge * 600; 
        starMat.opacity = 1 - state.lunge;
      },
      onComplete: onComplete
    }, "-=0.05");

    const animate = () => {
      requestAnimationFrame(animate);

      if (collided) {
        [g1, g2].forEach(galaxy => {
          const positions = galaxy.geo.attributes.position.array;
          const vels = galaxy.geo.attributes.velocity.array;
          
          for (let i = 0; i < positions.length; i += 3) {
            // Particles move outward AND aggressively toward camera based on 'lunge' state
            positions[i] += vels[i] * state.lunge;
            positions[i + 1] += vels[i + 1] * state.lunge;
            
            // The forward rush: Z position increases exponentially with the lunge
            const forwardSpeed = vels[i + 2] * (state.lunge * 4);
            positions[i + 2] += forwardSpeed;

            // Loop logic to keep the screen full of "storm" particles
            if (positions[i + 2] > camera.position.z + 200) {
              positions[i + 2] = camera.position.z - 4000;
            }
          }
          galaxy.geo.attributes.position.needsUpdate = true;
          
          // SCATTER SIZE: Make them large as they lunge forward
          galaxy.mat.size = 0.1 * (1 + state.lunge); 
        });
      } else {
        const rotationSpeed = 0.02 + (state.progress * 0.04);
        g1.group.rotation.y += rotationSpeed;
        g2.group.rotation.y += rotationSpeed;
        starField.rotation.y += 0.0005;
      }
      
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, [onComplete]);

  return <div ref={mountRef} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'black' }} />;
};

export default Intro;