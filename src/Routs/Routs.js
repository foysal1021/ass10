import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import CatagoryDetails from "../Component/LeftsideNav/CatagoryDetails";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Main from "../Layout/Main/Main";

export const routs = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => {
          return fetch("https://server-two-xi.vercel.app/course");
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/catagory/details/:id",
        element: <CatagoryDetails></CatagoryDetails>,
        loader: ({ params }) => {
          return fetch(`https://server-two-xi.vercel.app/course/${params.id}`);
        },
      },
    ],
  },
]);
