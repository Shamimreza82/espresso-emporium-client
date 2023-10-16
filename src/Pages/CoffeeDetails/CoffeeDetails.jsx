import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navber from '../../MainLayout/Header/Navber';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../../MainLayout/Footer/Footer';

const CoffeeDetails = () => {

    const singleCoffee = useLoaderData()
    console.log(singleCoffee);

    const {_id, name, category, chef, details, photo, supplier, taste} = singleCoffee; 

    return (
        <div >
            <Navber></Navber>
            <div className="md:w-[60%] m-auto mb-4 md:mt-10 ">
                <Link className="flex items-center gap-2 hover:underline " to="/"> <FaArrowLeft></FaArrowLeft> Back to Home</Link>
            </div>
            <div className='bg-[#F4F3F0] md:w-[60%] m-auto flex justify-around items-center rounded-md md:py-20 py-4 md:mb-16' >
                <img src={photo} alt="" />
                <div className='-ml-28 text-xl'>
                    <h1><strong>Name:</strong> {name}</h1>
                    <h1><strong>chef:</strong> {chef}</h1>
                    <h1><strong>supplier:</strong> {supplier}</h1>
                    <h1><strong>taste:</strong> {taste}</h1>
                    <h1><strong>details:</strong> {details}</h1>
                </div>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default CoffeeDetails;