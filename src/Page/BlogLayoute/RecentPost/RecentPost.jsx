// eslint-disable-next-line no-unused-vars
import React from 'react';

const RecentPost = () => {
    const winterProduct = [
        {
            id: 1,
            name: "Cauliflowers",
            image: "https://i.ibb.co/nn36Nyw/Mask-Group-3.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 2,
            name: "Tomato",
            image: "https://i.ibb.co/JBNbCn3/Mask-Group-2.png",
            oldPrice: "20",
            curreantPrice: "17"
        },
        {
            id: 5,
            name: "Tomato",
            image: "https://i.ibb.co/tx5V5sG/Mask-Group-1.png",
            oldPrice: "20",
            curreantPrice: "17"
        },
        {
            id: 6,
            name: "Onion",
            image: "https://i.ibb.co/9tmffG8/placeholder-1.png",
            oldPrice: "15",
            curreantPrice: "10"
        },
        {
            id: 7,
            name: "Cauliflowers",
            image: "https://i.ibb.co/fvWJ8n8/placeholder.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
       
    ]
    return (
        <div className='grid grid-cols-1  gap-4 my-10'>
            {
                    winterProduct.map(product =>
                        // eslint-disable-next-line react/jsx-key
                <div className='grid grid-cols-[100px_1fr] justify-center p-3 items-center'>
                    
                    <div ><img className='lg:w-[70%] w-full' src={product.image} alt="" /></div>
                    <div className=''>
                    <h2 className='font-bold'>Discover your Fashion with FashionHut</h2>
                    <div className='flex justify-between lg:mr-2 items-center gap-4'>
                        {/* <img src={img5} alt="" /> */}
                        <p className=''> <span className='text-[#FA541C]'>Admin </span>- 01 Dec 2022</p>
                    </div>
                   
                </div>
                           
                </div >
                    )
                }
        </div>
    );
};

export default RecentPost;