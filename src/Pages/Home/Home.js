import React from 'react';
import AllProducts from '../../components/AllProducts/AllProducts';
import Banner from '../../components/Banner/Banner';
import ShowAllProducts from '../../components/ShowAllProducts/ShowAllProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <AllProducts></AllProducts>
        </div>
    );
};

export default Home;