import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import Login from "../Pages/Login/Login";
import SineUp from "../Pages/SineUp/SineUp";
import User from "../User/User";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CoffeeDetails from "../Pages/CoffeeDetails/CoffeeDetails";
import Product from "../Pages/Products/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://espresso-emporium-server-6xqe1i7nh-shamim-rezas-projects.vercel.app/coffee')                           
    }, 
    {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>, 
       
    }, 
    {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>, 
        loader: ({params}) => fetch(`https://espresso-emporium-server-6xqe1i7nh-shamim-rezas-projects.vercel.app/coffee/${params.id}`)
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
        loader: () => fetch('https://espresso-emporium-server-6xqe1i7nh-shamim-rezas-projects.vercel.app/user') 
    }, 
    {
        path: '/CoffeeDetails/:id', 
        element: <CoffeeDetails></CoffeeDetails>, 
        loader: ({params}) => fetch(`http://localhost:5000/coffeeDetails/${params.id}`)
    }, 


])

export default router; 