import React from 'react';

import HelmetPage from '../../HelmetPage/HelmetPage';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Experts from './Experts/Experts';

const Home = () => {
    return (
        <>
          <HelmetPage title="Home"></HelmetPage>
            <Banner></Banner>
           <Services></Services>
           <Experts></Experts>
        </>
    );
};

export default Home;