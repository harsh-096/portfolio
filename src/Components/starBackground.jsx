import { useState, useEffect } from 'react';

export const StarBackground = () => {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        createStars();
        createMeteors();

        // Screen resize listener
        const handleResize = () => {
          createStars();
        };
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };

    }, []);


    // Function to create stars based on screen size
    const createStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 3000);

        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                size: Math.random() * 3 + 1,
                animationDuration: Math.random() * 4 + 2
            });
        }

        setStars(newStars);
    };


    // Function to create meteors
    const createMeteors = () => {
        const numberOfMeteor = 6;
        const newMeteor = []
        for (let i = 0; i < numberOfMeteor; i++) {
            newMeteor.push({
                id: Date.now() + Math.random() * 10000, // Unique IDs with more randomness
                x: Math.random() * 50 + 50, // Spawn from 50% to 100% (center to right)
                y: Math.random() * 30 + 10, // Spawn from 10% to 40% (not touching top)
                opacity: Math.random() * 0.6 + 0.4,
                size: Math.random() * 2 + 1,
                animationDuration: Math.random() * 3 + 3,
                delay: i * 1.5 // Staggered delay to prevent clustering
            });
        }
        setMeteors(newMeteor);
    };


    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                position: 'absolute',
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s"

            }}

            />
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size * 50 + "px",
                height: meteor.size * 2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                opacity: meteor.opacity,
                animationDuration: meteor.animationDuration + "s",
                animationDelay: meteor.delay
            }}

            />
        ))}

        </div>
);

}