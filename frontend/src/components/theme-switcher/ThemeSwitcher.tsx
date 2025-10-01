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
                onClick={toggleTheme}
                className="
                    bg-[var(--c-table-head)] border-2 border-[var(--c-header-links)] rounded-2xl text-[var(--c-orange)] uppercase
                    cursor-pointer hover:bg-[var(--c-header-links)] duration-300
                "
            >
                <p className="w-[170px]">{buttonText}</p>
            </button>
        </div>
    );
};
