import { createBrowserRouter } from "react-router-dom";
import Addrestaurant from './Restaurant/Addrestaurant';

import Login from "./Restaurant/Login";

import Homepage from "./Homepage/Homepage";



const routers = createBrowserRouter([

    {path:'/',element: <Homepage/>},
    {path:'/Addrestaurant',element: <Addrestaurant/>},
    {path:'/Login',element:<Login/>}
]);

export default routers;