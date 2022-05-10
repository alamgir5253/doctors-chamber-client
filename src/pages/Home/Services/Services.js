import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';

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
    </div>
  );
};

export default Services;