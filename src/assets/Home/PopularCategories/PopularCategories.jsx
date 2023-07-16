// eslint-disable-next-line no-unused-vars
import React from 'react';

import img1 from "../../../assets/bg-image/popular-cetegories/Mask group.png"
import img2 from "../../../assets/bg-image/popular-cetegories/football-jersey-outline-paper-crafts-removebg-preview 1.png"
import img3 from "../../../assets/bg-image/popular-cetegories/hoody-icon-outline-style-vector-12223626-removebg-preview 1.png"
import img4 from "../../../assets/bg-image/popular-cetegories/men-tennis-t-shirt-icon-outline-style-vector-11317453-removebg-preview (1) 1.png"
import bg1 from "../../../assets/bg-image/popular-cetegories/Rectangle 6471.png"
import bg2 from "../../../assets/bg-image/shop-pic/Pink-Color-Girls-Cute-Sweater-Women-s-High-Quality-Hoodie-removebg-preview 1.png"

const PopularCategories = () => {
    return (
        <div className='lg:my-10'>
            <div className=''>
                <h2 className='text-center text-[#212B36] lg:text-[64px] font-bold'>Popular Categories</h2>
                <p className='text-center text-[#48545E] text-[24px]'>Shop the product of your choice from the popular category</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10 grid-cols-1 justify-center items-center my-5 mx-auto'>
                <div className='hover:shadow-xl rounded-md py-5'>
                    <img className='mx-auto' src={img1} alt="" />
                    <h4 className='text-center mt-4 text-[24px] cursor-pointer text-[#383838] font-bold hover:text-[#FA541C]'>Winter Quality jacket</h4>
                    <p className='text-center'>(390 items)</p>
                </div>
                <div className='hover:shadow-xl rounded-md py-5'>
                    <img className='mx-auto' src={img2} alt="" />
                    <h4 className='text-center mt-4 text-[24px] cursor-pointer text-[#383838] font-bold hover:text-[#FA541C]'>Fifa World Cup Jersy</h4>
                    <p className='text-center'>(390 items)</p>
                </div>
                <div className='hover:shadow-xl rounded-md py-5'>
                    <img className='mx-auto' src={img3} alt="" />
                    <h4 className='text-center mt-4 text-[24px] cursor-pointer text-[#383838] font-bold hover:text-[#FA541C]'>Brand Hoodies</h4>
                    <p className='text-center'>(390 items)</p>
                </div>
                <div className='hover:shadow-xl rounded-md py-5'>
                    <img className='mx-auto' src={img4} alt="" />
                    <h4 className='text-center mt-4 text-[24px] cursor-pointer text-[#383838] font-bold hover:text-[#FA541C]'>Brand T-shirts</h4>
                    <p className='text-center'>(390 items)</p>
                </div>
                
            </div>
            <div className='mx-auto mb-16 lg:w-[180px] borderbt1'>
                <p className='bg-[#FA541C] w-[180px] text-center py-3 rounded-lg mx-auto my-4 text-white cursor-pointer'>Show More</p>
            </div>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 md:grid-cols-2'>
                <div className='relative'>
                    <div ><img className=' z-[99999] w-full' src={bg1} alt="" /></div>
                    <div className='absolute z-[99999] lg:block md:block hidden -mt-[192px] pl-4'>
                        <h2 className='text-[#212B36] lg:text-[24px] font-bold '>Quality Black Top</h2>
                        <p className='text-[18px] text-[#212B36]'>10% Discount on</p>
                        <p className='bg-[#FA541C] w-[120px] py-3 rounded-lg mx-auto my-4 text-white cursor-pointer text-center'>Shop Now</p>
                    </div>

                </div>
                <div className='grid rounded-md lg:grid-cols-2 bg-[#F3828A] gap-3 justify-center items-center'>
                    <div className='text-center '>
                        <h2 className='text-white text-[24px]'>Winter fluffy Coat</h2>
                        <p className='text-[#212B36] text-[18px]'>10% Discount on</p>
                        <p className='bg-[#FA541C] w-[120px] py-3 rounded-lg mx-auto my-4 text-white cursor-pointer'>Shop Now</p>
                    </div>
                    <div>
                        <img className='w-full lg:h-[278px] pt-10' src={bg2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;