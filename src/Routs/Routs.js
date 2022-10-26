import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";

export const routs = createBrowserRouter([
    {path:'/',element: <Main></Main>}
]);