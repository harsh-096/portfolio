import { useState, useEffect } from 'react';

export const CursorGlow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-40 w-32 h-32 rounded-full blur-xl"
            style={{
                left: mousePosition.x - 64, // Center the glow on cursor
                top: mousePosition.y - 64,
                transition: 'none', // Instant follow
                background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            }}
        />
    );
};
