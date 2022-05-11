import React from 'react';

const Service = ({service}) => {
  const { img, description, name} =service
  return (
    <div>
      <div class="card lg:w-96 bg-base-100 shadow-xl text-center mx-auto">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>

    </div>
  );
};

export default Service;