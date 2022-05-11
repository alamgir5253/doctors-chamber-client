import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AppointmentService from './AppointmentService';

const Appointment = () => {
  const [date, setDate] =useState(new Date())

  return (
    <div>
<AppointmentBanner date={date} setDate={setDate} />
<AppointmentService date={date}/>
<Footer />
    </div>
  );
};

export default Appointment;