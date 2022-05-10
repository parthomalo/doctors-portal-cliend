import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            country: 'canada'
        },

        {
            _id: 2,
            name: 'Rana khan',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            country: 'India'
        },
        {
            _id: 3,
            name: 'Rosid panda',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            country: 'Bangladesh'
        },
    ]
    return (
        <section className='mt-5 my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-secondary text-xl font-bold'>Testimonial</h4>
                    <h1 className='text-3xl'> What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;