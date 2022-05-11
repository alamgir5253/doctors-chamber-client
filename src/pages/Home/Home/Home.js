import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
// import Footer from '../Footer/Footer';
import Info from '../Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Treatment />
      <Footer />
    </div>
  );
};

export default Home;