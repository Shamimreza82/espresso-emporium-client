import React from 'react';
import bg from '../../assets/more/3.png'

const Banner = () => {
    return (
        <div className='md:min-h-screen h-[250px]' style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            
        </div>
    );
};

export default Banner;