import React from 'react';
import img1 from '../../assets/icons/1.png'
import img2 from '../../assets/icons/2.png'
import img3 from '../../assets/icons/3.png'
import img4 from '../../assets/icons/4.png'

const Category = () => {
    return (
        <div className='bg-[#ECEAE3] '>
           <div className='md:py-6 py-3 grid lg:grid-cols-4 grid-cols-2  gap-4 md:w-[80%] px-3 m-auto'>
                <div>
                    <img src={img1} alt="" />
                    <h1 className='text-xl'>Awesome Aroma</h1>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p> 
                 </div>              
                <div>
                    <img src={img2} alt="" />
                    <h1 className='text-xl'>High Quality</h1> 
                    <p>We served the coffee to you maintaining the best quality</p>     
                 </div>              
                <div>
                    <img src={img3} alt="" />
                    <h1 className='text-xl'>Pure Grades</h1> 
                    <p>The coffee is made of the green coffee beans which you will love</p> 
                 </div>              
                <div>
                    <img src={img4} alt="" />
                    <h1 className='text-xl'>Proper Roasting</h1>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p> 
                 </div>              
            </div>  
        </div>
    );  
};

export default Category;