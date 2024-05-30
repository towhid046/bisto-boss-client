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
import NotFoundPage from "./../pages/NotFoundPage/NotFoundPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AddReview from "./../pages/Dashboard/AddReview/AddReview";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "./../pages/Dashboard/AddItem/AddItem";
import Payment from "./../pages/Dashboard/Payment/Payment";
import ManageItems from "./../pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "./../pages/Dashboard/UpdateItem/UpdateItem";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
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
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/user-home",
        element: <UserHome />,
      },
      {
        path: "/dashboard/my-cart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/add-review",
        element: <AddReview />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },

      // admin related routes:
      {
        path: "/dashboard/all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/add-item",
        element: <AddItem />,
      },
      {
        path: "/dashboard/manage-items",
        element: <ManageItems />,
      },
      {
        path: "/dashboard/update-item/:id",
        loader: async ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/menu/${params.id}`),
        element: <UpdateItem />,
      },
    ],
  },
]);

export default routes;
