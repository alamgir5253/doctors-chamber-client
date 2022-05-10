import React from 'react';

const InfoCard = ({image,cardTitle, background,cardinfo}) => {
  return (
    <div>
      <div class={`card lg:card-side  shadow-xl p-4 ${background}`}>
  <figure><img src={image} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">{cardTitle}</h2>
    <p>{cardinfo}</p>
   
  </div>
</div>
    </div>
  );
};

export default InfoCard;