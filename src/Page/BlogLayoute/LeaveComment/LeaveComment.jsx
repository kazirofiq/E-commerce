// eslint-disable-next-line no-unused-vars
import React from 'react';

const LeaveComment = () => {
    return (
        <div className='my-10'>
            <h2 className='lg:text-[48px] font-bold'>Leave a Comment</h2>
            <p>Comment *</p>
           <form action="">
           <div>
            <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center gap-4'>
            <div className='my-4'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full my-4" />
            </div>
            <div>
            <label htmlFor="Name">email</label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            </div>
            <div className='flex justify-end'>
            <p className='text-center rounded-md  mb-[30px] bg-[#F46B5B] p-3 w-[100px]' type="submit">Submit</p>
            </div>
            </div>
           </form>
        </div>
    );
};

export default LeaveComment;