import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from '../Shared/Button';
const Banner = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair}  className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur ab nesciunt molestiae est laudantium, consectetur non dignissimos autem quisquam aperiam quis beatae accusantium, aliquid commodi sint molestias. Ipsa, fuga!
            </p>
            <Button> GET STARTED</Button>
          </div>
        </div>
      </div>
    );
};

export default Banner;