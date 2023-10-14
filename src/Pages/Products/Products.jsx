import React from 'react';
import bg from '../../assets/more/1.png'
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className='min-h-[100vh] md:py-10 py-3 md:my-10' style={{backgroundImage: `url(${bg})`,
         backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
             
             <div className='text-center space-y-2'>
                <h1 className='font-Raleway'>--- Sip & Savor ---</h1>
                <h2 className='text-3xl text-[#331A15]'>Our Popular Products</h2>
                <Link to='/addCoffee' className='btn '>Add Coffee</Link>
             </div>
             <div>

             </div>
        </div>
    );
};

export default Products;