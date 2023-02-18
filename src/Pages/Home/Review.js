import React from 'react';

const Review = ({ review }) => {
console.log(review)
    return (
        <section >
            <div className="  card lg:max-w-lg  bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{review.review}</p>
                </div>
                <div className="avatar ">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5 ml-4 mb-3">
                        <img  src={review.img} alt='' />
                    </div>
                    <div className='text-center justify-center'>
                        <h4>{review.name}</h4>
                        <h5>{review.country}</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;