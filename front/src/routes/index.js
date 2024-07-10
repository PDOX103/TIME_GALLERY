import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../PAGES/Homepage";
import SignIn from "../Components/SignUp/SignIn";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />
      },
      {
        path: "sign-in",
        element: <SignIn />  // Add SignIn route
      }
    ]
  }
]);

export default router;
