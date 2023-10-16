import React, { useEffect, useState } from 'react';
import bg from '../../assets/more/1.png'
import { Link, useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {

    const lodedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(lodedCoffees)

  
    return (
        <div className='min-h-[100vh] md:py-10 py-3 md:my-10' style={{backgroundImage: `url(${bg})`,
         backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
             
             <div className='text-center space-y-2'>
                <h1 className='font-Raleway'>--- Sip & Savor ---</h1>
                <h2 className='text-3xl text-[#331A15]'>Our Popular Products</h2>
                <Link to='/addCoffee' className='btn '>Add Coffee</Link>
             </div>
             <div className='grid md:grid-cols-2 gap-4 md:w-[70%] m-auto mt-4'>
                    {
                        coffees?.map(coffee => <Product key={coffee._id} coffee ={coffee}
                             coffees={coffees} setCoffees={setCoffees}  ></Product> )
                    }
             </div>
        </div>
    );
};

export default Products;