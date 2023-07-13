// eslint-disable-next-line no-unused-vars
import React from 'react';
import img1 from "../../../assets/bg-image/latest-blog/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz-removebg-preview 1.png"
const TopTradingProduct = () => {
    return (
        <div className='lg:mb-[200px]'>
            <div className='bg-[#F6F6F6] lg:block md:block hidden'>
                <div className='relative z-[99999] bg-[#F6F6F6] rounded-md '><img  src={img1} alt="" /></div>
                <div className='relative z-[99999] ml-10 -mt-[379px]'>
                <h6 className='text-[#54626E] lg:text-[24px]'>Top Trending Products</h6>
                <h2 className='lg:text-[64px] text-[#000000] font-bold'><span className='lg:whitespace-nowrap'>Best Modern Winter</span> <br />  Clothes Collectiion</h2>
                <p className='text-center border-bt1 py-4 text-[#FFFFFF] bg-[#FA541C] lg:w-[182px] cursor-pointer'>Shop Now</p>
                </div>
            </div>
            <div className='grid lg:hidden md:hidden  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center  bg-[#F6F6F6] my-10 px-10'>
            <div className='py-20 '>
                <h6 className='text-[#54626E] lg:text-[24px]'>Top Trending Products</h6>
                <h2 className='lg:text-[64px] text-[#000000] font-bold'><span className='lg:whitespace-nowrap'>Best Modern Winter</span>  Clothes Collectiion</h2>
                <p className='text-center border-bt1 py-4 mx-auto text-[#FFFFFF] bg-[#FA541C] lg:w-[182px] cursor-pointer '>Shop Now</p>
            </div>
            <div>
                <img className='w-full' src={img1} alt="" />
            </div>
        </div>
        </div>
    );
};

export default TopTradingProduct;