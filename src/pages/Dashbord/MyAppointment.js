import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';
const MyAppointment = () => {
  const [user, loading, error] = useAuthState(auth);
  const [appointment, setAppointment] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    if(user){
      fetch(`http://localhost:5000/booking?patient=${user.email}`,{
        method :'get',
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
    .then(res => {
      if(res.status === 401 || res.status === 403){
        signOut(auth)
        navigate('/')
      }
      return res.json()
    })

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
        <th>{index +1}</th>
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