import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import Products from "../Pages/Products/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
])

export default router; 