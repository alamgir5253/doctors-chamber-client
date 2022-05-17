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
    <div>
      <h1>my appointment {appointment.length}</h1>
    </div>
  );
};

export default MyAppointment;