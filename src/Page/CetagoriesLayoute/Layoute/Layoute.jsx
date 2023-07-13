// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Navbar from '../../../assets/Share/Navbar/Navbar';

const Layoute = () => {
    return (
       <div>
        <Navbar></Navbar>
         <div className='grid lg:grid-cols-[300px_1fr] grid-cols-1 mb-6'>
            <LeftSideBar></LeftSideBar>
            {/* <div className={`transition w-[95%] sm:w-1/2 pr-6 lg:w-full  lg:-translate-x-0 fixed lg:static z-[99999] ${hidden}`}><LeftSideBar></LeftSideBar></div> */}
            {/* <div onClick={toggleSidebar} className={`fixed lg:hidden w-full h-full z-[9999] bg-[#00000075] ${hidden}`}></div> */}
            <div className='m-8 h-screen'>
                {/* <input className='hidden' onClick={toggleSidebar} type="checkbox" id='toggle-sidebar'/> */}
                <Outlet></Outlet>
                {/* <Header></Header>
                <Dashboard></Dashboard> */}
                
                </div>
            {/* <div className='lg:block hidden'><RightSideBar></RightSideBar></div> */}
        </div>
       </div>
    );
};

export default Layoute;