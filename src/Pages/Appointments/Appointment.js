import React, { useState } from 'react';

import AppointmentBanar from './AppointmentBanar';
import AvailableAppointment from './AvailableAppointment';
import Footer from '../Shared/Footer';
const Appointment = () => {
   const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanar date={date} setDate= {setDate} ></AppointmentBanar>
            <AvailableAppointment date={ date}></AvailableAppointment>
            <Footer ></Footer>
        </div>
    );
};

export default Appointment;