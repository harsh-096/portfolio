import React, { useState } from 'react';
import Intro from './Components/Intro.jsx';
import { CursorGlow } from "./Components/CursorGlow";
import { Navbar } from "./Components/Navbar";
import { ThemeToggle } from "./Components/ThemeToggle";
import { StarBackground } from "./Components/starBackground";
import { HeroSection } from "./Components/HeroSection";
import { AboutSection } from "./Components/AboutSection";
import { SkillSection } from "./Components/SkillSection";
import { ProjectSection } from "./Components/ProjectSection";
import { ContactSection } from "./Components/ContactSection";
import { Footer } from "./Components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  
  // New state: prevents content from existing until intro is done
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    // 1. Start fading out the intro
    setFadeOut(true);
    
    // 2. TIMING FIX: Mount the content exactly when the fade starts.
    // This resets all CSS animations inside Hero/Navbar so they play now.
    setShowContent(true);

    // 3. Wait for the fade to finish before removing Intro from DOM
    setTimeout(() => {
      setShowIntro(false);
    }, 500); 
  };

  return (
    <div style={{ background: 'black', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* --- INTRO LAYER --- */}
      {showIntro && (
        <div 
          className={fadeOut ? 'fade-out' : ''}
          style={{ 
            position: 'fixed',
            inset: 0,
            zIndex: 9999, // Ensure this is higher than everything
            transition: 'opacity 0.5s ease-out',
            opacity: fadeOut ? 0 : 1, 
            pointerEvents: fadeOut ? 'none' : 'all',
            backgroundColor: 'black'
          }}
        >
          <Intro onComplete={handleIntroComplete} />
        </div>
      )}

      {/* --- MAIN CONTENT LAYER --- */}
      {/* We keep the container rendered so the background is ready,
         but we CONDITIONALLY render the inner content.
      */}
      <div className="min-h-screen bg-background text-foreground relative">
        <ThemeToggle />
        <StarBackground />
        <CursorGlow />
        
        {/* KEY FIX: contentVisible check.
           React will "mount" these components for the first time 
           only when showContent becomes true. 
           This forces all animations (fadeIn, slideIn) to start at t=0.
        */}
        {showContent && (
          <div className="fade-in-content">
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ProjectSection />
                <ContactSection />
            </main>
            <Footer />
          </div>
        )}
      </div>
      
    </div>
  );
}

export default App;