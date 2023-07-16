// eslint-disable-next-line no-unused-vars
import React from 'react';
import img from '../../../assets/bg-image/home-page/Rectangle 6484.png'
import img1 from '../../../assets/bg-image/home-page/f.png'
import img2 from '../../../assets/bg-image/home-page/instagram.png'
import img3 from '../../../assets/bg-image/home-page/Ld.png'
import img4 from '../../../assets/bg-image/home-page/Tw.png'
import img5 from '../../../assets/bg-image/home-page/Youtube.png'
import Comment from '../Comment/Comment';
import LeaveComment from '../LeaveComment/LeaveComment';

const Fashionhut = () => {
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
    ]
    return (
        <div className='my-10'>
            <div>
            <h2 className='lg:text-[36px] font-bold'>Discover your Fashion with FashionHut</h2>
            <p className='mb-4'>By Admin, 01 Dec 2022</p>
            <img src={img} alt="" />
            <p className='my-10'>I want to start with the following – before diving into the world of “Fashion Discovery” because StyleHut is, after all Fashion Discovery – Moda Operandi is the only online platform that offers straight off the runway pre-ordering.

            This means that we as customers can make sure to actually get our hands on the most-wanted, most-coveted, and ultra-trendy pieces that everyone wants to wear next season. This is an extremely smart and exciting way to shop, but of course, you’ll need to be confident about what’s going to be “hot” next season, and above all, you’ll need to have the patience for it to arrive, because it’s not a next-day delivery situation. Your next season’s person will get to you, but only just before the new collections hit the stores.

            The way to be ahead of the pack, and order next season’s best pieces, is through Moda Operandi’s many “Trunkshows”. These trunk shows arrive pretty much right after the new collections hit the runway, or when their new season lookbooks come out – this is usually for the brands who don’t show at fashion week.

            On top of being able to pre-order the latest collections – something that clearly sets Moda Operandi apart from most other online retailers – is the incredible curation of designers, and buy. You will find pieces on Moda Operandi that other online retailers aren’t offering, and they will bring you the most promising and loved new and upcoming designers of the moment.

            Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
            </div>
            <div>
                <p className='font-bold'>Social share</p>
                <div className='flex justify-start items-center gap-4 cursor-pointer'>
                    <img className='bg-blue-700 py-1 px-2 rounded-full' src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>
            <div>
                <h2 className='font-bold my-4 lg:text-[36px]'>Related Post</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-4 gap-4 my-10'>
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
                        <p className=''> <span className='text-[#FA541C]'>Admin </span>- 01 Dec 2022</p>
                    </div>
                   </div>
                </div>
                           
                        </div >
                    )
                } 
                
        </div>
            </div>
            <div>
                <Comment></Comment>
            </div>
                <div className='my-5'><LeaveComment></LeaveComment></div>
        </div>
    );
};

export default Fashionhut;