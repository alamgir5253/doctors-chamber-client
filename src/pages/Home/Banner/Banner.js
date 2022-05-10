import React from 'react';
import chair from '../../../assets/images/chair.png'
const Banner = () => {
  return (
    <div  class="">
      <div class="hero min-h-screen  bg-white bg-[url('/src/assets/images/bg.png')]">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-4xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6 w-8/12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-secondary text-white bg-gradient-to-r from-primary to-secondary font-bold">Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;