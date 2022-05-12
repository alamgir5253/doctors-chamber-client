import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import BookingModal from './BookingModal';
const AppointmentService = ({ date }) => {
const [appointmentBooking, setAppointmentBooking] = useState([])
const [BookingModalData, setBookingModalData] = useState(null)
console.log(BookingModalData);

const modaldata = (booking, e)=>{
  setBookingModalData( booking)
}
  useEffect(() => {
    fetch('service.json')
      .then(res => res.json())
      .then(data => setAppointmentBooking(data))
  }, [])
  return (
    <div>
      <p className='text-center text-secondary mb-4 font-sans text-2xl'>Available Appointment Date {format(date, 'PP')}.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {appointmentBooking.map(booking => <Booking
          key={booking._id}
          booking={booking}
          modaldata={modaldata}
        ></Booking>)}
      </div>
    {BookingModalData && <BookingModal 
    date={date}
     BookingModalData={BookingModalData}
     setBookingModalData={setBookingModalData}
     />}

    </div>
  );
};

export default AppointmentService;