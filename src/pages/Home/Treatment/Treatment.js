import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Patient from '../Patient/Patient';
const Treatment = () => {
  const  treatment =[
    {_id: 1,
    img: people1,
    name: 'Winson Herry',
    location: 'California'

  },
    {_id: 2,
    img: people2,
    name: 'Winson Herry',
    location: 'California'

  },
    {_id: 3,
    img: people3,
    name: 'Winson Herry',
    location: 'California'

  },

  ]
  return (
    <div className='mt-20 md:px-20 px-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-secondary font-bold uppercase text-xl'>Treatment</h2>
          <h3 className='text-3xl '>What 0ur Patients Says</h3>
        </div>
        <img className='md:w-48 w-24' src={quote} alt="quote" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          treatment.map(patient => <Patient 
          key={patient._id}
          patient={patient}
          ></Patient> )
        }
      </div>
    </div>
  );
};

export default Treatment;