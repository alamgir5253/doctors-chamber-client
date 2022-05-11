import React from 'react';
import chair from '../../../assets/images/chair.png'
import CommonBtn from '../../Shared/CommonBtn';
const Banner = () => {
  return (
    <section>
      <div className="hero min-h-screen  bg-white bg-[url('/src/assets/images/bg.png')]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6 w-8/12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <CommonBtn>get started</CommonBtn>
    </div>
  </div>
</div>
    </section>
  );
};

export default Banner;