import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export function ThemeToggleButton() {
    const { toggleTheme, mode } = useContext(ThemeContext);

    return (
        <IconButton color="inherit" onClick={toggleTheme}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}
