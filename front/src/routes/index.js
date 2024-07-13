import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../PAGES/Homepage";
import SignIn from "../Components/SignUp/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Profile from "../Components/SignUp/Profile";


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
        element: <SignIn /> 
      },
      {
        path: "sign-up",
        element: <SignUp />  
      },

      {
        path: "profile", // Add Profile route
        element: <Profile /> 
      }
      
    ]
  }
]);

export default router;
