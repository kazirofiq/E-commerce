// eslint-disable-next-line no-unused-vars
import React from 'react';

const NewsLetter = () => {
    return (
        <div className='bg-[#FB7649] rounded-md p-6 text-center my-10'>
            <h2 className='text-white lg:text-[48px] font-bold'>Join our newsletter now!</h2>
            <p className='text-white lg:text-[18px] mb-10'>Register now and get our latest updates and promos.</p>
            <div className="join text-center ">
            <input className="input lg:w-[500px] input-bordered join-item"/>
            <button className=" bg-slate-800 text-white join-item rounded-md">Join</button>
            </div>
        </div>
    );
};

export default NewsLetter;