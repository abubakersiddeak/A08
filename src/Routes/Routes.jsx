import { createBrowserRouter } from "react-router";

import Root from "../pages/Root/Root";
import Errorpage from "../pages/ErrorPage/Errorpage";
import "../App.css";
import Hero from "../components/Hero";
import AllApps from "../components/AllApps";
import Installation from "../components/Installation";
import AppDetail from "../components/AppDetail";
import ErrorAppPage from "../pages/ErrorPage/ErrorAppPage ";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage />,

    children: [
      {
        index: true,
        Component: Hero,
      },
      {
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/appDetils/:id",
        Component: AppDetail,
        errorElement: <ErrorAppPage />,
      },
    ],
  },
]);
