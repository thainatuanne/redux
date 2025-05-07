import {
    AppBar as AppBarMUI,
    Badge,
    Box,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import { Menu, LocalGroceryStore as CartIcon } from "@mui/icons-material";
import { useAppSelector } from "../store/hooks";
import { selectProducts } from "../store/modules/productsSlice";
import { ThemeToggleButton } from "../component/ThemeToggleButton"; 

export function AppBar() {
    const products = useAppSelector(selectProducts);

    const favoritesCount = products.filter((p) => p.isFavorite).length;

    return (
        <AppBarMUI position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <Menu />
                </IconButton>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Growdev
                </Typography>

                <ThemeToggleButton />

                <Box sx={{ ml: 2 }}>
                    <Badge badgeContent={favoritesCount} color="error">
                        <IconButton size="large" edge="end" color="inherit">
                            <CartIcon />
                        </IconButton>
                    </Badge>
                </Box>
            </Toolbar>
        </AppBarMUI>
    );
}
