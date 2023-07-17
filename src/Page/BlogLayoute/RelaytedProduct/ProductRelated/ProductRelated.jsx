// eslint-disable-next-line no-unused-vars
import React from 'react';

const ProductRelated = () => {
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
                name: "Tomato",
                image: "https://i.ibb.co/KWRzk3y/Rectangle-6467.png",
                oldPrice: "20",
                curreantPrice: "17"
            },
            {
                id: 4,
                name: "Onion",
                image: "https://i.ibb.co/ZGWSHrx/Rectangle-6467-1.png",
                oldPrice: "15",
                curreantPrice: "10"
            },
            {
                id: 5,
                name: "Tomato",
                image: "https://i.ibb.co/KWRzk3y/Rectangle-6467.png",
                oldPrice: "20",
                curreantPrice: "17"
            },
            {
                id: 6,
                name: "Onion",
                image: "https://i.ibb.co/ZGWSHrx/Rectangle-6467-1.png",
                oldPrice: "15",
                curreantPrice: "10"
            },
            {
                id: 7,
                name: "Onion",
                image: "https://i.ibb.co/ZGWSHrx/Rectangle-6467-1.png",
                oldPrice: "15",
                curreantPrice: "10"
            },
            {
                id: 8,
                name: "Onion",
                image: "https://i.ibb.co/ZGWSHrx/Rectangle-6467-1.png",
                oldPrice: "15",
                curreantPrice: "10"
            },
        ]
    return (
        <div>
            <h2 className='text-center lg:text-[48px] font-bold'>Related Product</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 p-4 gap-4 my-10'>
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
    );
};

export default ProductRelated;