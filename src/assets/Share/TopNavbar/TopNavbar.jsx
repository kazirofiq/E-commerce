// eslint-disable-next-line no-unused-vars
import React from 'react';
import bg from "../../../assets/bg-image/top-nav/Subtract.png"
import style from "../../../assets/bg-image/top-nav/Group 1000001845.png"
import phone from "../../../assets/bg-image/top-nav/Vector.png"
import email from "../../../assets/bg-image/top-nav/Vector (1).png"
import img from "../../../assets/bg-image/top-nav/Vector (1).png"
import img1 from "../../../assets/bg-image/top-nav/Vector (2).png"
import img2 from "../../../assets/bg-image/top-nav/Vector (3).png"
import img3 from "../../../assets/bg-image/top-nav/Vector (5).png"
const TopNavbar = () => {
    return (
        <div
        style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            height:60,
            backgroundPosition: 'center',
        }} 
        className=' lg:block hidden '
        >
            <div className='w-[1299px]'>
            <div className='flex justify-start ml-6 items-center pt-3 gap-2 text-white'>
                <img src={phone} alt="" />
                <p className='mr-4'>+8801926881485</p>
                <img src={email} alt="" />
                <p>stylehunt@gmail.com</p>

            </div>
            <div className='flex justify-end items-center -mt-4  gap-6 cursor-pointer'>
                <img src={img} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <div className='mx-auto -mt-8'>
            <img className='mx-auto' src={style} alt="" />
            </div>
            
            </div>

        </div>
    );
};

export default TopNavbar;