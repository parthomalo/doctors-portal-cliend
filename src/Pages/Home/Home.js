import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Exceptional from './Exceptional';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12  '>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Exceptional></Exceptional>
           <Appointment></Appointment>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;