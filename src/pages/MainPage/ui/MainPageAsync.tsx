import { lazy } from "react";

const MainPage = lazy(() => import("./MainPage"));

export const MainPageAsync = () => {
  return <MainPage />;
};