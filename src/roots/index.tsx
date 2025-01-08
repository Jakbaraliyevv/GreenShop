import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import PlantCare from "../pages/plantCare";
import Blogs from "../pages/blog";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/plantCare",
    element: <PlantCare />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
]);

export default root;
