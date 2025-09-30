import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.documentElement.classList.add(savedTheme);
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        if (newTheme === "light") document.documentElement.classList.remove("dark");
        document.documentElement.classList.add(newTheme);

        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const buttonText = theme === "light" ? "🌙 Set dark theme" : "☀️ Set light theme";

    return (
        <div className="theme-switcher">
            <button
                className="bg-gray-300 border-2 border-teal-500 p-1 rounded cursor-pointer hover:bg-teal-100 duration-300"
                onClick={toggleTheme}
            >
                <span>{buttonText}</span>
            </button>
        </div>
    );
};
