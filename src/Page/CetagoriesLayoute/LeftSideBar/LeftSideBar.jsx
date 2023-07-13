// eslint-disable-next-line no-unused-vars
import React from 'react';
import './LeftSideBar.css'
import img1 from "../../../assets/bg-image/winter-shirt/range.png"
import img2 from "../../../assets/bg-image/winter-shirt/scroll.png"
const LeftSideBar = () => {
    return (
        <div className=" rounded-lg grid grid-rows-[1fr] mr-6  mt-6 ml-6 bg-[#FFFFFF] border-left ">
            <div className='pl-5'>
                <div className='grid grid-cols-[1fr_50px] justify-center items-center'>
                    <div>
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
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center"> 
                    <div className="divider p-4"></div> 
                    </div>
                <div>
                    <h2 className='text-[18px] font-bold'>Filter by Price</h2>
                    <img src={img1} alt="" />
                    <p>Price: $751 - $1000 </p>
                    </div>
                    <div className="divider p-4"></div>     
            </div>
            <div>
                <h2 className='text-[18px] font-bold'>Filter by Rating</h2>
                <div>
                <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" checked="checked" className="checkbox" />
  </label>
</div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default LeftSideBar;