import { lazy, Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";
import './styles/index.scss';
import { useTheme } from "./theme/useTheme";
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));


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
