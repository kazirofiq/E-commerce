// eslint-disable-next-line no-unused-vars
import React from 'react';

const BlogDashboard = () => {
    const winterProduct = [
        {
            id: 1,
            name: "Tomato",
            image: "https://i.ibb.co/KWRzk3y/Rectangle-6467.png",
            oldPrice: "20",
            curreantPrice: "17"
        },
        {
            id: 2,
            name: "Onion",
            image: "https://i.ibb.co/ZGWSHrx/Rectangle-6467-1.png",
            oldPrice: "15",
            curreantPrice: "10"
        },
        {
            id: 3,
            name: "Cauliflowers",
            image: "https://i.ibb.co/xgzvSmK/Rectangle-6467-3.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 1,
            name: "Tomato",
            image: "https://i.ibb.co/KWRzk3y/Rectangle-6467.png",
            oldPrice: "20",
            curreantPrice: "17"
        },
        {
            id: 2,
            name: "Onion",
            image: "https://i.ibb.co/ZGWSHrx/Rectangle-6467-1.png",
            oldPrice: "15",
            curreantPrice: "10"
        },
        {
            id: 3,
            name: "Cauliflowers",
            image: "https://i.ibb.co/xgzvSmK/Rectangle-6467-3.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 1,
            name: "Tomato",
            image: "https://i.ibb.co/KWRzk3y/Rectangle-6467.png",
            oldPrice: "20",
            curreantPrice: "17"
        },
        {
            id: 2,
            name: "Onion",
            image: "https://i.ibb.co/ZGWSHrx/Rectangle-6467-1.png",
            oldPrice: "15",
            curreantPrice: "10"
        },
        {
            id: 3,
            name: "Cauliflowers",
            image: "https://i.ibb.co/xgzvSmK/Rectangle-6467-3.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 1,
            name: "Tomato",
            image: "https://i.ibb.co/KWRzk3y/Rectangle-6467.png",
            oldPrice: "20",
            curreantPrice: "17"
        },
        {
            id: 2,
            name: "Onion",
            image: "https://i.ibb.co/ZGWSHrx/Rectangle-6467-1.png",
            oldPrice: "15",
            curreantPrice: "10"
        },
        {
            id: 3,
            name: "Cauliflowers",
            image: "https://i.ibb.co/xgzvSmK/Rectangle-6467-3.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 1,
            name: "Tomato",
            image: "https://i.ibb.co/KWRzk3y/Rectangle-6467.png",
            oldPrice: "20",
            curreantPrice: "17"
        },
        {
            id: 2,
            name: "Onion",
            image: "https://i.ibb.co/ZGWSHrx/Rectangle-6467-1.png",
            oldPrice: "15",
            curreantPrice: "10"
        },
        {
            id: 3,
            name: "Cauliflowers",
            image: "https://i.ibb.co/xgzvSmK/Rectangle-6467-3.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
    ]
    return (
        <div className='border-das lg:mx-10 px-4'>
            <h2 className=' lg:text-[48px] font-bold'>Winter Collection</h2>
            <p className='text-center lg:text-[24px] mb-10'>Buy latest fashion winter collections at best prices in online shopping site StyleHut</p>
            <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 my-10'>
            {
                    winterProduct.map(product =>
                        // eslint-disable-next-line react/jsx-key
                        <div>
                    <div className="">
                    <div className="hovere:lg:absolute w-full hover:lg:z-[-9999]"><img className='lg:w-[95%] w-full' src={product.image} alt="" /></div>
                    <div className=''>
                    <h2>Calvin Klein Hoodie</h2>
                    <div className='flex justify-between lg:mr-2 items-center gap-4'>
                        {/* <img src={img5} alt="" /> */}
                        <p className='text-[#FA541C] lg:text-[24px] font-bold'>$270.00</p>
                    </div>
                   </div>
                </div>
                           
                        </div >
                    )
                }
        </div>
            </div>
            <div className='flex justify-end my-10'>
            <div className=" grid grid-cols-5 gap-3 justify-end">
            <p className=" p-2 rounded-md cursor-pointer bg-[#FFFFFF] hover:bg-[#FA541C] hover:text-white text-center">Previous</p>
            <p className=" p-2 rounded-md cursor-pointer bg-[#FFFFFF] hover:bg-[#FA541C] hover:text-white text-center">1</p>
            <p className=" p-2 rounded-md cursor-pointer bg-[#FFFFFF] hover:bg-[#FA541C] hover:text-white text-center">2</p>
            <p className=" p-2 rounded-md cursor-pointer bg-[#FFFFFF] hover:bg-[#FA541C] hover:text-white text-center">3</p>
            <p className=" p-2 rounded-md cursor-pointer bg-[#FFFFFF] hover:bg-[#FA541C] hover:text-white text-center">Next</p>
            </div>
            </div>
        </div>
    );
};

export default BlogDashboard;