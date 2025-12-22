import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../libs/utils.js";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // default dark

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "light") {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            // Default behavior → dark mode
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed dark:border-white rounded-full",
                "p-2 top-5 right-5 transition-colors duration-200 hover:bg-black/40 dark:hover:bg-white/40 hover:cursor-pointer z-50 hidden md:block"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-yellow-300" />
            )}
        </button>
    );
};
