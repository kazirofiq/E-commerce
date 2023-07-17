// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import searchbox from '../../bg-image/home-page/Search box.png';
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const menuItems = <React.Fragment>
        <li>
            <div>
            <details className="dropdown ">
        <summary className="flex justify-center items-center   cursor-pointer">Home<BiChevronDown></BiChevronDown> </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li className='text-black'><Link className='text-black' to="/">Home1</Link></li>
        <li className='text-black'><Link className='text-black' to="/hompages">Home2</Link></li>
        </ul>
        </details>
            </div>
        </li>
        
        <li className='text-black'><Link className='text-black' to="/bestsels">Best sels</Link></li>
        
        <li className='text-black'><Link className='text-black' to="/brandDetails">Brand Details</Link></li>
        <div className="form-control mx-5 md:block hidden">
        <div className="flex justify-center items-center">
            <input type="text" placeholder="Search…" className="p-2" />
            <p className="">
             <img className='w-[75%] cursor-pointer' src={searchbox} alt="" />
            </p>
        </div>
        </div>
        <li>
            <div>
            <details className="dropdown ">
        <summary className="flex justify-center items-center   cursor-pointer">Cetagoreis <BiChevronDown></BiChevronDown> </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><Link className='text-black' to='/blogdashboard/fashinhut'>Blog Details</Link></li>
                <li><Link className='text-black' to='/cart'>Cart</Link></li>
                <li><Link className='text-black' to='/checkout'>Checkout</Link></li>
                <li><Link className='text-black' to='/contact'>Contuct Us</Link></li>
        </ul>
        </details>
            </div>
        </li>
        
        {/* <ul className=" lg:w-[56] relative  ">
                <li>
                    <details open>
                    <summary>Cetagories</summary>
                    <ul className=' lg:w-[100%] rounded-md absolute bg-slate-300  z-[9999]'>
                        <li><Link to='/blogdashboard/fashinhut'>Blog</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/checkout'>Checkout</Link></li>
                        <li><Link to='/contact'>Contuct Us</Link></li>
                    </ul>
                    </details>
                </li>
                </ul> */}
        <li><Link className='text-black' to="/blogdashboard">Blog</Link></li>
        <li><Link className='text-black' to="/about">About</Link></li>
        {user?.uid ?
            <>
                <li><button className='text-black' onClick={handleLogout}>Log Out</button></li>
            </>
            :
            <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </>
        }
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex justify-between lg:w-[1299px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {/* <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label> */}
        </div>
    );
};

export default Navbar;