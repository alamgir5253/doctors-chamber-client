import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MyReview from './MyReview';

const Dashbord = () => {
  return (
    <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* <!-- Page content here --> */}
    <h1 className='py-4 mt-20 font-bold text-primary text-xl uppercase text-center'>Your All Appointment</h1>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>Hy Appointment</Link></li>
      <li><Link to='/dashboard/MyReview'>My Review</Link></li>
      <li><Link to='/dashboard/history'>History</Link></li>
    </ul>
  
  </div>
</div>
  );
};

export default Dashbord;