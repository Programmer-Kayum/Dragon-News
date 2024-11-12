import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../Security/Login/Login";
import RegistrationForm from "../../Security/RegistrationForm/RegistrationForm";
import NewsDetails from "../../pages/Home/NewsDetails";

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
      {
        path: "/reg",
        element: <RegistrationForm></RegistrationForm>,
      },
      {
        path: "news/:id",
        element: <NewsDetails></NewsDetails>,
      },
    ],
  },
]);

export default router;
