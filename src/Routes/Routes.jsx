import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "./../pages/HomePage/HomePage";
import MenuPage from "./../pages/MenuPage/MenuPage";
import OurShopPage from "../pages/OurShopPage/OurShopPage";
import Register from "./../pages/Register/Register";
import Login from "./../pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "./../Root/Dashboard";
import MyCart from "./../pages/Dashboard/MyCart/MyCart";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/my-cart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/user-home",
        element: <UserHome />,
      },
    ],
  },
]);

export default routes;
