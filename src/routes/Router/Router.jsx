import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../Security/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
