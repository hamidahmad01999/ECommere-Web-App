import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/login";
import ForgotPage from '../pages/forgotPassword';
import Signup from '../pages/signup';


const router= createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"forgot-password",
                element:<ForgotPage/>
            },
            {
                path:'signup',
                element:<Signup/>
            }
        ]
    }
]);

export default router;