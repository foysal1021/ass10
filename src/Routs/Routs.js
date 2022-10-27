import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import BuyNow from "../Component/BuyNow/BuyNow";
import Home from "../Component/Home/Home";
import CatagoryDetails from "../Component/LeftsideNav/CatagoryDetails";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Main from "../Layout/Main/Main";
import PrivateRouts from "./PrivateRouts";

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
      {
        path: "/buy-now",
        element: (
          <PrivateRouts>
            <BuyNow></BuyNow>
          </PrivateRouts>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
