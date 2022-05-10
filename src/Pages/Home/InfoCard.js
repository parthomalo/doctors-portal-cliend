import React from 'react';

const InfoCard = ({img, title, bgColor}) => {
    return (
        <div className={`card lg:card-side ${bgColor} shadow-xl`}>
            <figure>
                <img className='ml-5 sm:mt-5 md:mt-3 ' height={86} width={86} src={img} alt="Album" />

            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                
            </div>
        </div>
    );
};

export default InfoCard;