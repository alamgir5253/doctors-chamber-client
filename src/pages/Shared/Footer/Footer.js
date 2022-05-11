import React from 'react';
import footer from '../../../assets/images/footer.png'
const Footer = () => {
  return (
    <footer style={{
      background:`url(${footer})`,
      backgroundSize:"cover",
      backgroundPosition:"center, top"
    }} className='pt-20'>
      <div className="footer p-10  text-slate-700">
  <div className='mx-auto'>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div className='mx-auto'>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='mx-auto'>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</div>
<footer className="footer footer-center p-4  text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved by programming hero</p>
  </div>
</footer>
    </footer>
  );
};

export default Footer;