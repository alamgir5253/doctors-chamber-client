import React from 'react';
import { format } from 'date-fns';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {toast } from 'react-toastify';

const BookingModal = ({ BookingModalData, date, setBookingModalData }) => {
  const [user, loading, error] = useAuthState(auth);
  const {_id, name, slots } = BookingModalData;

  const formattedDate = format(date, 'PP')
  const HandleBooking =event =>{
    event.preventDefault()
    const slot = event.target.slot.value
    const booking ={
      treatment_id: _id,
      treatmentName: name,
      date: formattedDate,
      slot,
      patient:user.email,
      phone:event.target.phone.value,
      patientName:user.displayName

    }
    fetch('http://localhost:5000/booking',{
      method: 'POST',
      headers:{
        'content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      toast('data added to server')
    })

    // to close the modal 
    setBookingModalData(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">

          <label htmlFor="booking-modal" className="btn btn-sm btn-circle  absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-center mb-4 text-secondary">Appointment Booking For {name}</h3>

          <form onSubmit={HandleBooking} className='grid grid-cols-1 justify-items-center gap-2  '>
            <input type="text" value={format(date, 'PP')} className="input input-bordered input-sm w-full max-w-xs" />

            <select name='slot' className="select select-bordered select-sm w-full max-w-xs">
              {
                slots?.map((slot, index) => <option
                key={index}
                   value={slot}
                   >{slot}</option>)
              }
            </select>

            <input type="text"disabled value={user?.displayName ||''} className="input input-bordered input-sm w-full max-w-xs" />
            <input type="email" disabled value={user?.email ||''} className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" name='phone' placeholder="phone number" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="submit" placeholder="submit" className="bg-primary input input-bordered input-sm w-full max-w-xs" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;