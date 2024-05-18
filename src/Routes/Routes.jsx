import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "./../pages/HomePage/HomePage";
import MenuPage from "./../pages/MenuPage/MenuPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>Error: 404</h2>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/our-menu",
        element: <MenuPage />,
      },
    ],
  },
]);

export default routes;
