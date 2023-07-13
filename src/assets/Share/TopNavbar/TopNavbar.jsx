// eslint-disable-next-line no-unused-vars
import React from 'react';
import bg from "../../../assets/bg-image/Subtract.png"
import style from "../../../assets/bg-image/Group 1000001845.png"
const TopNavbar = () => {
    return (
        <div
        style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            height:60,
            backgroundPosition: 'center',
        }} 
        className='mt-8 lg:block hidden '
        >
            <div className='mx-auto'>
            <img className='mx-auto' src={style} alt="" />
            </div>
        </div>
    );
};

export default TopNavbar;