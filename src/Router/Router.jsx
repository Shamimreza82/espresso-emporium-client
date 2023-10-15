import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import SineUp from "../Pages/SineUp/SineUp";
import User from "../User/User";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('http://localhost:5000/coffee')                           
    }, 
    {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>, 
       
    }, 
    {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>, 
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
    }, 
    {
        path: "/login",
        element: <Login></Login>, 
    }, 
    {
        path: "/sineup",
        element: <SineUp></SineUp>, 
    }, 
    {
        path: "/user",
        element: <User></User>, 
        loader: () => fetch('http://localhost:5000/user') 
    }

])

export default router; 