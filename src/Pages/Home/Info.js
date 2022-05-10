import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 '>
            <InfoCard bgColor={'bg-gradient-to-r from-primary to-secondary'} title={'Opening Hours'} img={clock}></InfoCard>
            <InfoCard bgColor={'bg-accent'} title={'Visit our location'} img={marker}></InfoCard>
            <InfoCard bgColor={'bg-gradient-to-r from-primary to-secondary'} title={'Contact us now'} img={phone}></InfoCard>
        </div>
    );
};

export default Info;