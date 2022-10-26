import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routs } from "./Routs/Routs";

function App() {
  return (
    <div>
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
