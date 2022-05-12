import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [service, setService] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    
    return (
        <div className='mt-7 mb-9'>
            <div>
                <h4 className='text-secondary font-bold text-center text-2xl mb-16 '>Available Available Appointments : {format(date, 'PP')} </h4>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    service.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal  
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>}
        </div>

    );
};

export default AvailableAppointment;