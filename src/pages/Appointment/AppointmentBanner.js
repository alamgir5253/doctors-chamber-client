import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = () => {
  const [date, setDate] =useState(new Date())
  

  return (
    <section>
    <div className="hero min-h-screen  bg-white bg-[url('/src/assets/images/bg.png')]">
<div className="hero-content flex-col lg:flex-row-reverse">
  <img src={chair} className="max-w-lg rounded-lg shadow-2xl" />
  <div>
  <DayPicker mode="single"
      selected={date}
      onSelect={setDate}/>
   
  </div>
</div>
</div>
  <p className='text-center font-bold text-primary'>SELECTED DATE IS {format(date, 'PP')}.</p>
  </section>
  );
};

export default AppointmentBanner;