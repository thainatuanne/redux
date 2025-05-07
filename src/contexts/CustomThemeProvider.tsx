import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState, ReactNode } from "react";
import { light } from "../themes/light";
import { dark } from "../themes/dark";
import { ThemeContext } from "./ThemeContext";

export function CustomThemeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<"light" | "dark">("light");

    const theme = useMemo(() => (mode === "light" ? light : dark), [mode]);

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
