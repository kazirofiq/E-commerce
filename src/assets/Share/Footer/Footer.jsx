// eslint-disable-next-line no-unused-vars
import React from 'react';
import img1 from '../../../assets/bg-image/home-page/01.png'
import img2 from '../../../assets/bg-image/home-page/02.png'
import img3 from '../../../assets/bg-image/home-page/03.png'
const Footer = () => {
    return (
      <footer className="footer p-10 bg-[#212B36] text-base-content">
      <div>
        <h2 className='text-[#FA541C] mb-10 lg:text-[36px] font-bold '>StyleHut</h2>
        <a className="link link-hover text-white">Branding</a> 
        <a className="link link-hover text-white">Design</a> 
        <a className="link link-hover text-white">Marketing</a> 
        <div className='flex justify-center items-center gap-4'>
          <img className='cursor-pointer' src={img1} alt="" />
          <img className='cursor-pointer' src={img2} alt="" />
          <img className='cursor-pointer' src={img3} alt="" />
        </div>
      </div> 
      <div>
        <span className="footer-title">Services</span> 
        <a className="link link-hover text-white">Branding</a> 
        <a className="link link-hover text-white">Design</a> 
        <a className="link link-hover text-white">Marketing</a> 
        <a className="link link-hover text-white">Advertisement</a>
        
      </div> 
      <div>
        <span className="footer-title">Company</span> 
        <a className="link link-hover text-white">About us</a> 
        <a className="link link-hover text-white">Contact</a> 
        <a className="link link-hover text-white">Jobs</a> 
        <a className="link link-hover text-white">Press kit</a>
      </div> 
      <div>
        <span className="footer-title">Legal</span> 
        <a className="link link-hover text-white">Terms of use</a> 
        <a className="link link-hover text-white">Privacy policy</a> 
        <a className="link link-hover text-white">Cookie policy</a>
        <div>
          <input className='w-[50%] p-1 mb-2 rounded-md'  type="text" />
          <p className='text-white w-[50%] p-1 text-center rounded-md cursor-pointer bg-[#FA541C]'>Join</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;