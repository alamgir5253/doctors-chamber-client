import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
  const [user, loading, error] = useAuthState(auth);
  const [appointment, setAppointment] = useState([])
  
  useEffect(()=>{
    if(user){
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
    .then(res => res.json())
    .then(data =>setAppointment(data))
    }
  },[user])
  if(loading){
    return<Loading />
  }

  return (
    <div className="overflow-x-auto">
  <table className="table  w-full">
    <thead>
      <tr>
        <th   className='bg-secondary text-white text-md'>Name</th>
        <th   className='bg-secondary text-white text-md'>Date</th>
        <th   className='bg-secondary text-white text-md'>Time</th>
        <th   className='bg-secondary text-white text-md'>Treatment</th>
      </tr>
    </thead>
    <tbody>
     {appointment.map((appoint, index) =>
     <tr className='hover ' key={index}>
        <th>{appoint.patientName}</th>
        <th>{appoint.date}</th>
        <th>{appoint.slot}</th>
        <th>{appoint.treatmentName}</th>
        
      </tr>)}
      
    
    </tbody>
  </table>
</div>
  );
};

export default MyAppointment;