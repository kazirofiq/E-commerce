// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../../../assets/Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import BlogSidebar from '../BlogSidebar/BlogSidebar';

const Bloglayoute = () => {
    return (
        <div>
        <Navbar></Navbar>
         <div className='grid lg:grid-cols-[400px_1fr] grid-cols-1 mb-6'>
            
            <BlogSidebar></BlogSidebar>
            <div className='m-8 h-screen'>
                <Outlet></Outlet>
                </div>
        </div>
       </div>
    );
};

export default Bloglayoute;