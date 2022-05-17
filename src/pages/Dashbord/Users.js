import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
  const {data, isLoading} = useQuery('users', ()=>fetch('http://localhost:5000/user').then(res =>res.json()))
  if(isLoading){
    return<Loading />
  }
  return (
    <div>
      <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((user, index) => <UserRow
          key={user._id}
          index={index}
          user={user}
          />)
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Users;