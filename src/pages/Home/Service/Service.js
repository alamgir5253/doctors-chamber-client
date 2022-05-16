import React from 'react';

const Service = ({service}) => {
  const { img, description, name} =service
  return (
    <div>
      <div className="card lg:w-96 bg-base-100 shadow-xl text-center mx-auto">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>

    </div>
  );
};

export default Service;