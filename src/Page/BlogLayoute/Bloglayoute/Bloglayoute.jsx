// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../../../assets/Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import BlogSidebar from '../BlogSidebar/BlogSidebar';
import { Link } from 'react-router-dom';

const Bloglayoute = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className='ml-4'>
            <ul className="menu relative lg:w-[56px] rounded-box">
                <li>
                    <details open>
                    <summary>Cetagories</summary>
                    <div className="text-sm breadcrumbs">
                    <ul className='absolute  z-[9999]'>
                        <li><a>Home</a></li> 
                        <li><Link to='/blogdashboard/fashinhut'>Blog</Link></li>
                    </ul>
                    </div>
                    </details>
                </li>
                </ul>
            </div>
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