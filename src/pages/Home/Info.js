import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
  return (
    <div className='grid grid-flow-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white'>
      <InfoCard background='bg-gradient-to-r from-primary to-secondary' cardinfo='10pm to 5pm' cardTitle='Opening hours' image={clock} />
      <InfoCard background='bg-accent' cardinfo='Brooklyn, NY 10036, United States' cardTitle='Visit our location' image={marker} />
      <InfoCard background='bg-gradient-to-r from-primary to-secondary' cardinfo='01871754280' cardTitle='Contact Us' image={phone} />
    </div>
  );
};

export default Info;