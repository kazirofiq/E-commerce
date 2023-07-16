// eslint-disable-next-line no-unused-vars
import React from 'react';

const Comment = () => {
    const winterProduct = [
        {
            id: 1,
            name: "Cauliflowers",
            image: "https://i.ibb.co/nn36Nyw/Mask-Group-3.png",
            oldPrice: "30",
            details: "Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        },
        {
            id: 2,
            name: "Tomato",
            image: "https://i.ibb.co/JBNbCn3/Mask-Group-2.png",
            oldPrice: "20",
            details: "Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        },
    ]
    return (
        <div>
            <h2 className='lg:text-[48px]'>Comments</h2>
        <div className='grid grid-cols-1  gap-4 my-10'>
            {
                    winterProduct.map(product =>
                        // eslint-disable-next-line react/jsx-key
                <div>
                    <div className='grid grid-cols-[100px_1fr] justify-center p-3 items-center'>
                    
                    <div ><img className='lg:w-[70%] w-full' src={product.image} alt="" /></div>
                    <div className=''>
                    <h2 className='font-bold'>Discover your Fashion with FashionHut</h2>
                    <div className=''>
                        {/* <img src={img5} alt="" /> */}
                        <p className=''>01 Dec 2022</p>
                        
                    </div>
                    </div>
                    
                           
                </div >
                <p>{product.details}</p>
                </div>
                
                    )
                }
        </div>
        </div>
    );
};

export default Comment;