import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // <--- IMPORT THIS
import { cn } from "../libs/utils";
import { X, Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className={cn("fixed w-full z-50 transition-all duration-300 top-0 left-0",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5",
            )}>
                <div className="container flex items-center justify-between">
                    <a href="#hero" className="text-xl font-bold text-primary flex items-center relative z-50">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Harsh</span> Parmar
                        </span>
                    </a>

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button 
                        onClick={() => setMenuOpen((prev) => !prev)} 
                        className="md:hidden p-2 text-foreground z-50 relative"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* PORTAL FIX: 
               This moves the menu OUT of the <nav> and attaches it directly to the <body>.
               It cannot be trapped by parent elements anymore.
            */}
            {createPortal(
                <div className={cn(
                    "fixed inset-0 bg-background z-[9999]", 
                    "flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
                )}>
                    {/* Floating Close Button inside the portal for easier access */}
                    <button 
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 p-2 text-foreground"
                    >
                        <X size={24} />
                    </button>

                    <div className="flex flex-col space-y-8 text-xl text-center">
                        {navItems.map((item, key) => (
                            <a
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-2xl"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}