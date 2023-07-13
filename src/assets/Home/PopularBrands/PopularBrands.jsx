// eslint-disable-next-line no-unused-vars
import React from 'react';
import './PopularBrands.css';
import img1 from "../../../assets/bg-image/popular-brad/Rectangle 6467.png"
import img2 from "../../../assets/bg-image/popular-brad/Rectangle 6467 (1).png"
import img3 from "../../../assets/bg-image/popular-brad/Rectangle 6467 (2).png"
import img4 from "../../../assets/bg-image/popular-brad/Rectangle 6467 (3).png"
import img5 from "../../../assets/bg-image/popular-brad/Frame 1000001723.png"
const PopularBrands = () => {
    return (
        <div className='my-5'>
            <h2 className='text-center font-bold text-[48px] text-[#383838]'>Shop our new arrivals from popular brands</h2>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
                <div><p className='border-bt p-5 text-center hover:bg-[#383838] hover:text-white cursor-pointer'>New Arrival</p></div>
                <div><p className='border-bt p-5 text-center hover:bg-[#383838] hover:text-white cursor-pointer'>T shirts</p></div>
                <div><p className='border-bt p-5 text-center hover:bg-[#383838] hover:text-white cursor-pointer'>Best Sales</p></div>
                <div><p className='border-bt p-5 text-center hover:bg-[#383838] hover:text-white cursor-pointer'>Jacket</p></div>
                <div><p className='border-bt p-5 text-center hover:bg-[#383838] hover:text-white cursor-pointer'>Jersy</p></div>
                <div><p className='border-bt p-5 text-center hover:bg-[#383838] hover:text-white cursor-pointer'>Hoodies</p></div>
            </div>
            <div className='grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-4'>
                <div className='relative'>
                    <div><img className='lg:absolute w-full lg:z-[-9999]' src={img1} alt="" /></div>
                   <div className='lg:absolute lg:z-[9999] lg:mt-[344px]'>
                   <p className='bg-[#FA541C]  px-[115px] py-4 cursor-pointer shadow-lg'>Shop Now</p>
                    <h2>Calvin Klein Hoodie</h2>
                    <div className='flex justify-between mr-2 items-center gap-4'>
                        <img src={img5} alt="" />
                        <p className='text-[#FA541C] text-[24px] font-bold'>$270.00</p>
                    </div>
                   </div>
                </div>
                <div>
                    <img className='w-full' src={img2} alt="" />
                    <h2>Calvin Klein Hoodie</h2>
                    <div className='flex justify-between mr-2 items-center gap-4'>
                        <img src={img5} alt="" />
                        <p className='text-[#FA541C] text-[24px] font-bold'>$270.00</p>
                    </div>
                </div>
                <div>
                    <img className='w-full' src={img3} alt="" />
                    <h2>Calvin Klein Hoodie</h2>
                    <div className='flex justify-between mr-2 items-center gap-4'>
                        <img src={img5} alt="" />
                        <p className='text-[#FA541C] text-[24px] font-bold'>$270.00</p>
                    </div>
                </div>
                <div>
                    <img className='w-full' src={img4} alt="" />
                    <h2>Calvin Klein Hoodie</h2>
                    <div className='flex justify-between mr-2 items-center gap-4'>
                        <img src={img5} alt="" />
                        <p className='text-[#FA541C] text-[24px] font-bold'>$270.00</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default PopularBrands;