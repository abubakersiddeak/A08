import { createBrowserRouter } from "react-router";

import Root from "../pages/Root/Root";
import Errorpage from "../pages/ErrorPage/Errorpage";
import "../App.css";
import Hero from "../components/Hero";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Hero,
      },
    ],
  },
]);
