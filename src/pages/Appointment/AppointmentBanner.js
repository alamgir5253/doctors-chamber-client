import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({date, setDate}) => {
  

  return (
    <section>
    <div className="hero min-h-screen  bg-white bg-[url('/src/assets/images/bg.png')]">
<div className="hero-content  flex-col lg:flex-row-reverse">
  <img src={chair} className=" max-w-lg   rounded-lg shadow-2xl" />
  <div className='mx-20'></div>
  <div className=''>
  <DayPicker mode="single"
      selected={date}
      onSelect={setDate}/>
   
  </div>
</div>
</div>
  
  </section>
  );
};

export default AppointmentBanner;