import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../Firebase.init';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  const NavItems = <>
  <li><NavLink className='rounded-md'  to='/'>Home</NavLink></li>
  <li><NavLink className='rounded-md'  to='/Appointment'>Appointment</NavLink></li>
  <li><NavLink className='rounded-md'  to='/reviews'>reviews</NavLink></li>
  <li><NavLink className='rounded-md'  to='/Contact Us'>Contact Us</NavLink></li>
  <li><NavLink className='rounded-md'  to='/About'>About</NavLink></li>
  
  {user && <li><NavLink className='rounded-md'  to='/dashboard'>Dashboard</NavLink></li>}

  <li> {user ?<button className="btn btn-active btn-ghost" onClick={handleSignOut}>Sign Out</button>:<NavLink className='rounded-md'  to='/Login'>Login</NavLink>}</li>
  <li><NavLink className='rounded-md'  to='/signup'>Sign Up</NavLink></li>
  
  
  </>
  return (
    <div>
      <div className="navbar  bg-base-100">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="gap-x-4 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {
          NavItems
        }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><Link to='/'>Doctors chamber</Link></a>
  </div>
  <div className='navbar-end'>
  <label  htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-x-4">
      {
        NavItems
      }
    </ul>
  </div>
  
</div>
    </div>
  );
};

export default Navbar;