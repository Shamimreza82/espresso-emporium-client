import React from 'react';
import error from '../../assets/404/404.gif'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <img src={error} alt="" />
            </div>
            
           <div>
                <Link>Back to home page</Link>
           </div>
        </div>
    );
};

export default ErrorPage;