import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth, {sendEmailVerification: true});
  const [updateProfile, updating, uperror] = useUpdateProfile(auth);
  const navigate = useNavigate()
  let location = useLocation()
  // signInWithEmailAndPassword start 
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  if(loading || gloading ||updating){
    return <Loading></Loading>
  }

  let errorMassage ;
  if(error || gerror ||uperror)(
    errorMassage = <p className='text-red-700 text-sm font-bold'>{error?.message || gerror?.message ||uperror?.message}</p>
  )
  if(user){
    console.log(user)
  }

  
let from = location.state?.from?.pathname || "/";

  const onSubmit = async data => {
    console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name});
    navigate(from, { replace: true });
  };
  return (
    <div className=' flex justify-center h-screen items-center'>
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center font-bold">SignUp</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Your Name</span>
              
            </label>
            <input type="text"
             placeholder="name"
              className="input input-bordered w-full max-w-xs"
              {...register("name",
              {
                required:{
                  value: true,
                  message: 'Enter Your name'
                }, 
              })
            }
               />
               {
               errors.email?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.email.message}</span>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Your Email</span>
              
            </label>
            <input type="email"
             placeholder="email"
              className="input input-bordered w-full max-w-xs"
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
          <input className=" input-bordered w-full max-w-xs btn btn-outline  mt-4" type="submit" value='SignUp' />
        </form>
        <p>Already Have An Account? <Link className='text-primary' to='/login'>Login</Link> </p>
        <div className="divider">OR</div>
        <button onClick={() => signInWithGoogle()} className="btn btn-outline">Login With Google</button>

      </div>
    </div>
  </div>
  );
};

export default SignUp;