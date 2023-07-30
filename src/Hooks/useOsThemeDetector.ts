import { useEffect, useState } from "react";

const useOsThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = ((e: any) => {
        setIsDarkTheme(e.matches);
    });

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);

    return {
        osTheme: isDarkTheme ? 'dark' : 'light',
        dark: isDarkTheme,
        light: !isDarkTheme,
    };
}

export default useOsThemeDetector