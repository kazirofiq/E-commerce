// eslint-disable-next-line no-unused-vars
import React from 'react';
import img1 from "../../../assets/bg-image/latest-blog/Rectangle 6509.png"
import img2 from "../../../assets/bg-image/latest-blog/Rectangle 6510 (1).png"
import "./LatestBlogs.css";
const LatestBlogs = () => {
    return (
        <div className='my-10'>
            <h2 className='text-center font-bold text-[48px] text-[#212B36]'>Latest Blogs</h2>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                <div>
                    <img src={img1} alt="" />
                    <div className='my-10'>
                <p className='text-center'>Posted by ThemeVale on 31st Aug 2017</p>
                    <h2 className='text-center font-bold'>Loremous Cosmopolis</h2>
                    <p className='border-bt1 bg-[#FA541C] w-40 mx-auto text-center text-white py-3 px-8'>Read More</p>
                </div>
                </div>
                <div>
                <img src={img2} alt="" />
                <div className='my-10'>
                <p className='text-center'>Posted by ThemeVale on 31st Aug 2017</p>
                    <h2 className='text-center font-bold'>Loremous Cosmopolis</h2>
                    <p className='border-bt1 bg-[#FA541C] w-40 mx-auto text-center text-white py-3 px-8'>Read More</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlogs;