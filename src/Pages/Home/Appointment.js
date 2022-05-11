import React from 'react';
import doctor from '../../assets/images/doctor.png'
import Button from '../Shared/Button';
import appointment from '../../assets/images/appointment.png'
const Appointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex w-100 mt-28'>

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>

            <div className='flex-1 mt-8 mr-8 px-5 '>
                <h1 className='text-secondary font-bold px-3'>Appointment</h1>
                <h1 className='text-white text-4xl font-bold'>Make an appointment Today</h1>
                <p className='text-white mt-3 mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>GET STARTED</Button>
            </div>
        </section>
    );
};

export default Appointment;