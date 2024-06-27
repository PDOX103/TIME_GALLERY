import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hompage from "../PAGES/Hompage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:"",
                element:<Hompage/>
            }
        ]
    }
])

export default router