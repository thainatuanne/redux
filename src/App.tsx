import { AppRoutes } from "./routes/AppRoutes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { CustomThemeProvider } from "./contexts/CustomThemeProvider";

export function App() {
    return (
        <ReduxProvider store={store}>
            <CustomThemeProvider>
                <AppRoutes />
            </CustomThemeProvider>
        </ReduxProvider>
    );
}
