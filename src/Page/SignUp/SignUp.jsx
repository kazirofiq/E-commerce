/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import image from '../../assets/bg-image/shop-pic/Rectangle 1.png'
import { useForm } from 'react-hook-form';
import google from '../../assets/bg-image/shop-pic/search 1.png'
import facebooko from '../../assets/bg-image/shop-pic/Facebook.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const { creatUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSigunUp = data => {
        console.log(data);
        creatUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                if (user.uid) {
                    alert('user creat succesfully')
                    navigate('/')
                }
            })
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
                        <h2 className='text-4xl font-bold'>Create an account</h2>
                        <h3 className='text-xl font-semibold mt-4'>Get started absolutely free.</h3>
                        <form onSubmit={handleSubmit(handleSigunUp)}>
                            <div className="w-full max-w-xs mt-10">
                                <input type="text" {...register("userName")} placeholder="Username" className="input w-full lg:w-[430px] " required />
                                <hr className='w-full lg:w-[430px]' />
                            </div>
                            <div className="w-full max-w-xs mt-5">
                                <input type="email" {...register("email")} placeholder="Email" className="input w-full lg:w-[430px] " required />
                                <hr className='w-full lg:w-[430px]' />
                            </div>

                            <div className="w-full max-w-xs mt-5">
                                <input type="password" {...register("password")} placeholder="Password" className="input w-full lg:w-[430px]" />
                                <hr className='w-full lg:w-[430px]' />
                            </div>
                            <input className='w-full text-white font-bold rounded-md cursor-pointer h-[60px] bg-[#FA541C] mt-6' value='Log in' type="submit" />
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
                    Already have an account?
                    <Link className="text-[#000000] font-semibold" to="/login">
                        Log in
                    </Link>
                </p>
            </div>


        </section>
    );
};

export default SignUp;