import { createContext } from "react";

export enum Theme {
    NORMAL = 'normal',
    DARK = 'dark'
}

export interface IThemeContextProps {
    theme?: Theme;
    setTheme?: (arg0: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';