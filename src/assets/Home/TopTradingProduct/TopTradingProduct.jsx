// eslint-disable-next-line no-unused-vars
import React from 'react';
import './TopTradingProduct.css'
import img1 from "../../../assets/bg-image/latest-blog/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz-removebg-preview 1.png"
const TopTradingProduct = () => {
    return (
        <div className='lg:mb-[200px] '>
            <div className='bg-[rgb(246,246,246)] relative lg:block md:block hidden'>
                <div className=' bg-[#F6F6F6] rounded-md '><img  src={img1} alt="" /></div>
                <div className='relative z-[99999] ml-10 lg:-mt-[379px] md:-mt-[379px] '>
                <h6 className='text-[#54626E] lg:text-[24px] '>Top Trending Products</h6>
                <h2 className='lg:text-[64px] text-[#000000] font-bold'><span className='lg:whitespace-nowrap'>Best Modern Winter</span> <br />  Clothes Collectiion</h2>
                <p className='text-center border-shop py-4 text-[#FFFFFF] bg-[#FA541C] lg:w-[182px] cursor-pointer rounded-md'>Shop Now</p>
                </div>
            </div>
            <div className='grid lg:hidden md:hidden  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center  bg-[#F6F6F6]'>
            <div className='py-20 '>
                <h6 className='text-[#54626E] lg:text-[24px] lg:text-left md:text-left text-center '>Top Trending Products</h6>
                <h2 className='lg:text-[64px] text-[#000000] font-bold lg:text-left md:text-left text-center'><span className='lg:whitespace-nowrap '>Best Modern Winter</span>  Clothes Collectiion</h2>
                <p className='text-center rounded-md py-3 mt-2  mx-auto text-[#FFFFFF] bg-[#FA541C] w-[120px] cursor-pointer '>Shop Now</p>
            </div>
            <div>
                <img className='w-full' src={img1} alt="" />
            </div>
        </div>
        </div>
    );
};

export default TopTradingProduct;