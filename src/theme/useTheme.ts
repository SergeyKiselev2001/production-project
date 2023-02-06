import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./themeContext";

interface UseThemeResults {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResults => {
    const { theme, setTheme } = useContext(ThemeContext)


  const toggleTheme = () => {
    const newTheme = theme == Theme.DARK ? Theme.NORMAL : Theme.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return {
    toggleTheme,
    theme,
  };
};
