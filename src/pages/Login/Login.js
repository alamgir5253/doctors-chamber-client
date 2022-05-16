import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';

const Login = () => {
  ;
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(
    auth
  );
  
  let navigate = useNavigate();
let location = useLocation()
let from = location.state?.from?.pathname || "/";

  // const [email, setEmail] = useState('')
  // console.log(email);

  // sign up With Email And Password start 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
 
  // useEffect(()=>{
  //   if(guser){
  //     navigate(from, { replace: true });
  //   }
  // },[])

  if(loading || gloading || sending){
    return <Loading></Loading>
  }

  let errorMassage ;
  if(error || gerror)(
    errorMassage = <p className='text-red-700 text-sm font-bold'>{error?.message || gerror?.message}</p>
  )
  
   

 
  // const ResetPassword = async ()=>{
  //  await sendPasswordResetEmail(email)
  //  toast('reset email')
  // }
  // redirect to page start 

  const onSubmit = async data => {
    console.log(data)
    await signInWithEmailAndPassword(data.email, data.password)
    navigate(from, { replace: true });
  };


  return (
    <div className=' flex justify-center h-screen items-center'>
      <div className="card max-w-96 -z-10 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Email</span>
                
              </label>
              <input type="email"
               placeholder="email"
                className="input input-bordered w-full max-w-xs"
                // onChange={(e) => setEmail(e.target.value)}
                {...register("email",
                {
                  required:{
                    value: true,
                    message: 'Enter Your email'
                  }, 
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Enter Valid Email'
                    
                  }
                })
              }
                 />
                 {
                 errors.email?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                 {
                 errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-600">{errors.email.message}</span>}
              
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Password</span>
              </label>
              <input type="password"
               placeholder="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password",
                {
                  required:{
                    value: true,
                    message: 'Enter Your password'
                  }, 
                  minLength: {
                    value: 8,
                    message: 'minimum 8 character require'
                    
                  }
                })
              }
                 />
                 {
                 errors.password?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                 {
                 errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-600">{errors.password.message}</span>}
              
            </div>
            {errorMassage}
            {/* <p className='underline text-gray-800 cursor-pointer mt-2' onClick={ ResetPassword}>forgate password?</p> */}
            <input className=" input-bordered w-full max-w-xs btn btn-outline  mt-4" type="submit" value='Login' />
          </form>
          <p>New To Doctors Chamber? <Link className='text-primary' to='/signup'>SignUp</Link> </p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">Login With Google</button>

        </div>
      </div>
    </div>
  );
};

export default Login;