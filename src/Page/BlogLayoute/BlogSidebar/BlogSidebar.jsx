// eslint-disable-next-line no-unused-vars
import React from 'react';
import RecentPost from '../RecentPost/RecentPost';
import RelaytedProduct from '../RelaytedProduct/RelaytedProduct';

const BlogSidebar = () => {
    return (
        <div className=" rounded-lg grid grid-rows-[1fr] mr-6  mt-6 ml-6 bg-[#FFFFFF] border-left ">
            <div className='pl-4'>
                    <p className='my-8'>All Categories</p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <p className='my-8'>Women <span className='text-[#B2B2B2] '>(395)</span> </p>
                <div className="divider p-4"></div> 
                    </div>
            <RecentPost></RecentPost>
            <div className="divider p-4"></div> 
            <RelaytedProduct></RelaytedProduct>

        </div>
    );
};

export default BlogSidebar;