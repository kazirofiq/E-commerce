// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import Navbar from '../Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import { ClipLoader } from 'react-spinners';
import TopNavbar from '../Share/TopNavbar/TopNavbar';

const Main = () => {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 500)
    }, [])
    return (
        <div >
            {
                loader ?
                    <div className="flex justify-center items-center h-screen">
                        <ClipLoader color="#0000ff" size="50" loader={loader} />
                    </div>
                    :
                    <div>
                        <TopNavbar></TopNavbar>
                        <Navbar></Navbar>
                        <div className='bottom'>
                            <Outlet></Outlet>
                        </div>
                        <Footer></Footer>
                    </div>
            }
        </div>
    );
};

export default Main;