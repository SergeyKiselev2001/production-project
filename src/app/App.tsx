import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/helpers/classNames/classNames";

export const App = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'/about'} element={<AboutPage />} />
            </Routes>
        </Suspense>
    </div>
  );
};
