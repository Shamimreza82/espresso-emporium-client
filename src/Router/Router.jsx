import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,                            
    }, 
    {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>, 
    }
])

export default router; 