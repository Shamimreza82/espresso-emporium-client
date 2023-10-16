import React from 'react';
import bg from '../../assets/more/3.png'

const Banner = () => {
    return (
        <div className='md:min-h-screen h-[250px]' style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className='text-gray-300 flex justify-center md:min-h-screen h-[250px]  items-center '>
               <div className='text-center md:space-y-4'>
               <h1 className='md:text-5xl text-2xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='w-[80%] m-auto leading-4 md:leading-6 '>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='md:btn text-black btn-sm rounded-md bg-[#E3B577] border-0'>Learn More</button>
               </div>
            </div>
        </div>
    );
};

export default Banner;