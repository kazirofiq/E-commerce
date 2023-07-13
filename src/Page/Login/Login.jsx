// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import image from '../../assets/bg-image/shop-pic/Rectangle 1.png'
import { useForm } from 'react-hook-form';
import google from '../../assets/bg-image/shop-pic/search 1.png'
import facebooko from '../../assets/bg-image/shop-pic/Facebook.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const Login = () => {
    const { register, handleSubmit } = useForm();
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate()

    const { login } = useContext(AuthContext)
    const handleLogin = data => {
        login(data.email, data.password)

            .then(result => {
                const user = result.user
                console.log(user);
                if (user.uid) {
                    alert('login succesfully')
                    navigate('/')
                }
            })
            .catch(error => {
                console.error(error);
            })

    }

    const toggleChecked = e => {
        setIsChecked(e.target.checked);
    }

    return (
        <section className=" flex flex-wrap  lg:items-center lg:w-[1299px] mx-auto gap-x-14">
            <div className=" h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src={image}
                    className=" inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="card flex-shrink-0 w-[430px] h-[679px] max-w-sm bg-[#FFFFFF]">
                <div className='h-[679px] '>
                    <div className='lg:w-[430px] w-full'>
                        <h2 className='text-5xl font-bold'>Login</h2>
                        <h3 className='text-xl font-semibold mt-4'>Welcome back! Please enter your details.</h3>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="w-full max-w-xs mt-10">
                                <input type="text" {...register("email")} placeholder="Email" className="input w-full lg:w-[430px] " required />
                                <hr className='w-full lg:w-[430px]' />
                            </div>

                            <div className="w-full max-w-xs mt-5">
                                <input type="password" {...register("password")} placeholder="Password" className="input w-full lg:w-[430px]" />
                                <hr className='w-full lg:w-[430px]' />
                            </div>
                            <div className='flex justify-between mt-5 '>
                                <div>
                                    <div className="flex justify-between">
                                        <div className="">
                                            <label className="label cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    id="A3-yes"
                                                    name="A3-confirmation"
                                                    value="yes"
                                                    className="opacity-0 absolute h-8 w-8"
                                                    onChange={toggleChecked}
                                                />
                                                <div className="bg-white border-2  border-[#212B36] w-[16px] h-[16px] flex  flex-shrink-0 justify-center items-center mr-2">
                                                    <svg
                                                        className="fill-current hidden w-3 h-3 text-[#212B36] pointer-events-none"
                                                        version="1.1"
                                                        viewBox="0 0 17 12"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g fill="none" fillRule="evenodd">
                                                            <g
                                                                transform="translate(-9 -11)"
                                                                fill="#3D419F"
                                                                fillRule="nonzero"
                                                            >
                                                                <path
                                                                    className=""
                                                                    d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p className='text-[#A0A0A0]'>Remember me</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <p className='text-[#212B36] cursor-pointer mt-2'>forgot Password?</p>
                            </div>

                            {
                                isChecked ?
                                    <input className='w-full text-white font-bold rounded-md cursor-pointer h-[60px] bg-[#FA541C] mt-6' value='Log in' type="submit" />
                                    :
                                    <input className='w-full text-white font-bold rounded-md cursor-pointer h-[60px] bg-[#f58966] mt-6' value='Log in' type="submit" />
                            }
                        </form>
                        <div className="divider">OR</div>
                        <div className='flex justify-between gap-x-2'>
                            <div className='flex border-2 lg:w-[204px] w-full py-3 px-2 gap-x-1 cursor-pointer rounded-md'>
                                <img className='h-7 w-7' src={google} />
                                <p>Sign up with Google</p>
                            </div>
                            <div className='flex border-2 lg:w-[204px] w-full py-3 px-2 gap-x-1 cursor-pointer rounded-md'>
                                <img className='h-7 w-7' src={facebooko} />
                                <p>Sign with Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="font-semibold text-[16px] leading-[24px] text-[#666666] mt-[16px] text-center">
                    Don’t have an account?
                    <Link className="text-[#000000] font-semibold" to="/signup">
                        Sign up for free
                    </Link>
                </p>
            </div>


        </section>
    );
};

export default Login;