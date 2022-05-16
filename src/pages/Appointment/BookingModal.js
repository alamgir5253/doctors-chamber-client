import React from 'react';
import { format } from 'date-fns';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const BookingModal = ({ BookingModalData, date, setBookingModalData }) => {
  const [user, loading, error] = useAuthState(auth);

  const {_id, name, slots } = BookingModalData;
  const HandleBooking =event =>{
    event.preventDefault()
    const slot = event.target.slot.value
    console.log(_id, name, slot);
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
            <input type="text" placeholder="phone number" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="submit" placeholder="submit" className="bg-primary input input-bordered input-sm w-full max-w-xs" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;