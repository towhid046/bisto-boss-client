import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "./../pages/HomePage/HomePage";
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
    ],
  },
]);

export default routes;
