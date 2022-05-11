import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import CommonBtn from '../../Shared/CommonBtn';
const MakeAppointment = () => {
  return (
    <section className="flex mt-20 justify-center items-center bg-[url('/src/assets/images/appointment.png')] ">
      <div className='flex-1 hidden md:block'>
        <img className='mt-[-10rem]' src={doctor} alt="" />
        </div>
        <div className='flex-1 p-4'>
          <h2 className='text-primary text-xl uppercase'>appointment</h2>
          <h4 className='text-3xl pt-4 text-white'>Make an appointment Today</h4>
          <p className='pt-4 pb-4 text-lg text-white'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <CommonBtn>get start</CommonBtn> 
          </div>
            
    </section>
  );
};

export default MakeAppointment;