import React from 'react';
import logo from '../../assets/more/logo1.png'
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaMailBulk, FaLocationArrow    } from "react-icons/fa";
import bg from '../../assets/more/13.jpg'
import bg2 from '../../assets/more/24.jpg'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row bg-slate-200 justify-center items-center md:gap-9 md:py-20 font-rancho '
            style={{backgroundImage: `url(${bg})`}}
            >
                <div className='  px-4 space-y-2'>
                    <img className='w-[50px] ' src={logo} alt="" />
                    <h1 className='text-2xl' >Espresso Emporium</h1>
                    <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='flex gap-2 text-2xl'>
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                        <FaTwitter></FaTwitter> 
                    </div>
                    <h2>Get in Touch</h2>
                    <p className='flex gap-4 items-center'><FaPhone></FaPhone> +88 01533 333 333 </p>
                    <p className='flex gap-4 items-center'><FaMailBulk></FaMailBulk> info@gmail.com</p>
                    <p className='flex gap-4 items-center'><FaLocationArrow></FaLocationArrow> 72, Wall street, King Road, Dhaka </p>
               
                 </div> 
                 <div className='space-y-3'>
                    <h2 className='text-2xl'>Connect with Us</h2>
                    <input type="text" placeholder='name'  className='block w-full' />
                    <input type="text" placeholder='email'  className='block w-full'/>
                    <textarea id="w3review" name="w3review" rows="4" cols="50"/>
                 </div>
            </div>
            <div className='flex justify-center py-3 bg-slate-300'
            style={{backgroundImage: `url(${bg2})`}}
            >
                <small className='text-white'>Copyright Espresso Emporium ! All Rights Reserved</small>
            </div>
        </div>
    );
};

export default Footer;