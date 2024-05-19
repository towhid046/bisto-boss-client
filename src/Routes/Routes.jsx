import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "./../pages/HomePage/HomePage";
import MenuPage from "./../pages/MenuPage/MenuPage";
import OurShopPage from "../pages/OurShopPage/OurShopPage";
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
      {
        path: "/our-shop",
        element: <OurShopPage />,
      },
    ],
  },
]);

export default routes;
