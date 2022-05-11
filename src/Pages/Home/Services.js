import React from 'react';
import whitening from '../../assets/images/whitening.png'
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import Service from './Service';
const Services = () => {
    const service = [
        {
            _id: 1,
            name: 'Fluor_ide Treatment',
            img: fluoride,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            img: cavity,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            img: whitening,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
    ]
    return (
        <section className='mt-5'>
            <h3 className='text-secondary text-xl  text-center sm:text-center'>OUR SERVICES </h3>
            <h1 className='color-primary text-center uppercase font-bold sm:text-center text-3xl'>Services We Provide </h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>

                {
                    service.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;