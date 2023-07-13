// eslint-disable-next-line no-unused-vars
import React from 'react';
import img1 from "../../../assets/bg-image/home-page/Rectangle 6469.png"
import img2 from "../../../assets/bg-image/home-page/Rectangle 6470.png"
import img3 from "../../../assets/bg-image/home-page/Rectangle 6471 (5).png"

const WinterCategories = () => {
    return (
        <div className='grid grid-cols-1 my-10 lg:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center'>
            <div className='relative'>
                <div ><img className='' src={img1} alt="" /></div>
                <div className='absolute z-[9999] -mt-[350px] ml-8 lg:block hidden  bg-[#DFEDF5] rounded-md p-4 text-center'>
                    <p>25% Discount on</p>
                    <h2 className='text-[36px] font-bold'>Quality Pink <br /> Hoodie</h2>
                    <p className='text-white bg-[#FA541C] px-4 py-4 rounded-md'>Shop Now</p>
                </div>
            </div>
            <div className='grid grid-rows-2 justify-center gap-4 items-center'>
                <div className='relative'>
                    <img src={img2} alt="" />
                <div className='absolute z-[9999] -mt-[208px] ml-8 lg:block hidden  bg-[#DFEDF5] rounded-md p-4 text-center'>
                    <p>25% Discount on</p>
                    <h2 className='text-[24px] font-bold'>Quality Pink <br /> Hoodie</h2>
                    <p className='text-white bg-[#FA541C] px-3 py-3 rounded-md'>Shop Now</p>
                </div>
                </div>
                <div className='relative'>
                    <img src={img3} alt="" />
                <div className='absolute z-[9999] -mt-[208px] ml-8 lg:block hidden  bg-[#DFEDF5] rounded-md p-4 text-center'>
                    <p>25% Discount on</p>
                    <h2 className='text-[24px] font-bold'>Quality Pink <br /> Hoodie</h2>
                    <p className='text-white bg-[#FA541C] px-3 py-3 rounded-md'>Shop Now</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WinterCategories;