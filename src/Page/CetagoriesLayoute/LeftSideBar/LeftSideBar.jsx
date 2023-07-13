// eslint-disable-next-line no-unused-vars
import React from 'react';
import './LeftSideBar.css'
import img1 from "../../../assets/bg-image/winter-shirt/range.png"
import img2 from "../../../assets/bg-image/winter-shirt/scroll.png"
import img3 from "../../../assets/bg-image/winter-shirt/rating.png"
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
                <h2 className='text-[18px] font-bold pl-2'>Filter by Rating</h2>
                <div className='flex justify-start items-center gap-3 my-2 pl-2'>
                <Checkbox {...label} />
                <img src={img3} alt="" />
                </div>
                <div className='flex justify-start items-center gap-3 my-2 pl-2'>
                <Checkbox {...label} />
                <img src={img3} alt="" />
                <img src={img3} alt="" />
                </div>
                <div className='flex justify-start items-center gap-3 my-2 pl-2'>
                <Checkbox {...label} />
                <img src={img3} alt="" />
                <img src={img3} alt="" />
                <img src={img3} alt="" />
                </div>
                <div className='flex justify-start items-center gap-3 my-2 pl-2'>
                <Checkbox {...label} />
                <img src={img3} alt="" />
                <img src={img3} alt="" />
                <img src={img3} alt="" />
                <img src={img3} alt="" />
                </div>
                <div className='flex justify-start items-center gap-3 my-2 pl-2'>
                <Checkbox {...label} />
                <img src={img3} alt="" />
                <img src={img3} alt="" />
                <img src={img3} alt="" />
                <img src={img3} alt="" />
                <img src={img3} alt="" />
                </div>
                <div className="divider p-4"></div> 
            </div>
            <div>
                <h2 className='text-[18px] font-bold pl-2'>Filter by Rating</h2>
                <div className='flex justify-start gap-3 items-center'>
                <Checkbox {...label} />
                <p>White</p>
                </div>
                <div className='flex justify-start gap-3 items-center'>
                <Checkbox {...label} />
                <p>Black</p>
                </div>
                <div className='flex justify-start gap-3 items-center'>
                <Checkbox {...label} />
                <p>Red</p>
                </div>
                <div className='flex justify-start gap-3 items-center'>
                <Checkbox {...label} />
                <p>Blue</p>
                </div>
                <div className="divider p-4"></div> 
            </div>
            <div>
                <h2 className='text-[18px] font-bold pl-2'>Filter by Rating</h2>
                <div className='flex justify-start gap-3 items-center'>
                <Checkbox {...label} />
                <p>M</p>
                </div>
                <div className='flex justify-start gap-3 items-center'>
                <Checkbox {...label} />
                <p>L</p>
                </div>
                <div className='flex justify-start gap-3 items-center'>
                <Checkbox {...label} />
                <p>XL</p>
                </div>
                <div className='flex justify-start gap-3 items-center'>
                <Checkbox {...label} />
                <p>XLL</p>
                </div> 
            </div>
        </div>
    );
};

export default LeftSideBar;