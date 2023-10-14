import React from 'react';
import img1 from '../../assets/cups/Rectangle 9.png'
import img2 from '../../assets/cups/Rectangle 10.png'
import img3 from '../../assets/cups/Rectangle 11.png'
import img4 from '../../assets/cups/Rectangle 12.png'
import img5 from '../../assets/cups/Rectangle 13.png'
import img6 from '../../assets/cups/Rectangle 14.png'
import img7 from '../../assets/cups/Rectangle 15.png'
import img8 from '../../assets/cups/Rectangle 16.png'

const Instagram = () => {
    return (
        <div className='min-h-[100vh] md:py-10 py-3 '>
            <div className='text-center mb-6  '>
                <h1 className='font-Raleway'>Follow Us Now</h1>
                <h2 className='text-3xl text-[#331A15]'>Follow on Instagram</h2>
             </div>
             <div className='grid md:grid-cols-4 grid-cols-2 gap-5 md:w-[80%] m-auto'>
                <img className='w-full' src={img1} alt="" />
                <img className='w-full' src={img2} alt="" />
                <img className='w-full' src={img3} alt="" />
                <img className='w-full' src={img4} alt="" />
                <img className='w-full' src={img5} alt="" />
                <img className='w-full' src={img6} alt="" />
                <img className='w-full' src={img7} alt="" />
                <img className='w-full' src={img8} alt="" />

            
             </div>
        </div>
    );
};

export default Instagram;