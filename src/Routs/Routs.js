import { createBrowserRouter } from "react-router-dom";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Main from "../Layout/Main/Main";

export const routs = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
