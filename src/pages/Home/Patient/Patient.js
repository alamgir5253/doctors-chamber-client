import React from 'react';

const Patient = ({patient}) => {
  const {img, name, location} =patient
  return (
    <div>
      <div>
        <p className='p-4'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
      </div>
      <div className='flex justify-evenly items-center pt-4'>
      <div className="avatar">
  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img  src={img} />
  </div>
</div>
      <div>
        <h4>{name}</h4>
        <p>{location}</p>
      </div>
      </div>
    </div>
  );
};

export default Patient;