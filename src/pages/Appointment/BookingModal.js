import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ BookingModalData, date, setBookingModalData }) => {
  console.log(BookingModalData);
  const {_id, name, slots } = BookingModalData;
  const HandleBooking =event =>{
    event.preventDefault()
    const slot = event.target.slot.value
    console.log(_id, name, slot);
    setBookingModalData(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">

          <label for="booking-modal" class="btn btn-sm btn-circle  absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg text-center mb-4 text-secondary">Appointment Booking For {name}</h3>

          <form onSubmit={HandleBooking} className='grid grid-cols-1 justify-items-center gap-2  '>
            <input type="text" value={format(date, 'PP')} class="input input-bordered input-sm w-full max-w-xs" />

            <select name='slot' class="select select-bordered select-sm w-full max-w-xs">
              {
                slots?.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>

            <input type="text" placeholder="enter name" class="input input-bordered input-sm w-full max-w-xs" />
            <input type="email" placeholder="enter email" class="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="phone number" class="input input-bordered input-sm w-full max-w-xs" />
            <input type="submit" placeholder="submit" class="bg-primary input input-bordered input-sm w-full max-w-xs" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;