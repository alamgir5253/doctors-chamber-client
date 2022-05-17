import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
  const {email, role} = user
  const MakeAdmin = () =>{
    fetch(`http://localhost:5000/user/admin/${email}`,{
      method: 'put',
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res =>{
      if(res.status === 403){
        toast.error('faild to make an admin')
      } 
     return res.json()})
    .then(data =>{
      if(data.modifiedCount > 0){
        refetch()
      toast.success(`successfully made an admin`)
      }
      })
  }
  return (
    <tr>
        <th>{index +1}</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button className="btn btn-xs" onClick={MakeAdmin}>Make Admin</button>}</td>
        <td><button className="btn btn-xs">Tiny</button></td>
      </tr>
  );
};

export default UserRow;