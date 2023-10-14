import React from 'react';
import Navber from './Navber';
import Banner from './Banner';
import Category from './Category';
import Products from '../../Pages/Products/Products';
import Instagram from '../../Pages/Instagram/Instagram';

const Header = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Category></Category>
            <Products></Products>
            <Instagram></Instagram>
        </div>
    );
};

export default Header;