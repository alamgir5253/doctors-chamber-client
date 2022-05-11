import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';
import treatment from '../../../assets/images/treatment.png'
import CommonBtn from '../../Shared/CommonBtn';
const Services = () => {
  const services =[
    {
      _id: 1,
      name: 'Fluoride Treatment',
      img: fluoride,
      description:'something'
    },
    {
      _id: 2,
      name: 'Cavity Filling',
      img: cavity,
      description:'something'
    },
    {
      _id: 3,
      name: 'Teeth Whitenning',
      img: whitening,
      description:'something'
    },
  ]
  return (
    <div className='py-20'>
      <div className='text-center'>
        <h2 className='text-secondary font-bold text-xl uppercase'>our services</h2>
        <h1 className='text-4xl font-normal pt-4'>Service We Provide</h1>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
      {
        services.map(service => <Service
        key={service._id}
        service={service}
           />)
      }
      </div>
      <div className="hero min-h-screen mt-20 bg-white">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-md rounded-lg shadow-2xl" />
    <div className='lg:pl-20'>
      <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <CommonBtn>get started</CommonBtn>
    </div>
  </div>
</div>
    </div>
  );
};

export default Services;