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
            <div className='m-8 h-screen'>
                <Outlet></Outlet>
                </div>
        </div>
       </div>
    );
};

export default Layoute;