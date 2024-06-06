import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Icon from "../pages/Icon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,    
  },
  {
    path: "/icons/:icon",
    element: <Icon/>,    
  },
]);

export default router