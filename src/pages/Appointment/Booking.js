import React from 'react';
const Booking = ({ booking,modaldata }) => {
  // console.log(booking);
  const { name, slots } = booking
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className=" text-center text-secondary font-bold text-xl">{name}</h2>
        <p className='text-sm'>
          {slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600 font-bold'>book another date</span>}
        </p>
        <p className='text-xs'>
          {slots.length} {slots.length > 1 ? <span>spaces</span> : <span>space</span>} Available
        </p>
        <div className="card-actions justify-center">
          <label onClick={()=>modaldata(booking)}htmlFor="booking-modal"  disabled={slots.length === 0} className='btn btn-secondary  modal-button text-white bg-gradient-to-r from-primary to-secondary mt-4 font-bold'>Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Booking;