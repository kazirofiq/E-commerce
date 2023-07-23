// eslint-disable-next-line no-unused-vars
import React from 'react';
import img5 from '../../assets/bg-image/home-page/Rectangle 6485.png'

const About = () => {
    return (
        <div className='lg:w-[1299px] mx-auto'>
           <div className='p-5'>
           <h2 className='lg:text-[48px] font-bold'>About StyleHut</h2>
            <p className='mb-10'>This means that we as customers can make sure to actually get our hands on the most-wanted, most-coveted, and ultra-trendy pieces that everyone wants to wear next season. This is an extremely smart and exciting way to shop, but of course, you’ll need to be confident about what’s going to be “hot” next season, and above all, you’ll need to have the patience for it to arrive, because it’s not a next-day delivery situation. Your next season’s person will get to you, but only just before the new collections hit the stores. The way to be ahead of the pack, and order next season’s best pieces, is through Moda Operandi’s many “Trunkshows”. you’ll need to be confident about what’s going to be “hot” next season, and above all.</p>
                <img src={img5} alt="" />
           </div>
           <div className='grid lg:grid-cols-[300px_1fr] p-4 grid-cols-1 my-4 justify-center  gap-4'>
                <div>
                    <h2 className='font-bold'>Why we</h2>
                </div>
                <div>
                    <p>On top of being able to pre-order the latest collections – something that clearly sets Moda Operandi apart from most other online retailers – is the incredible curation of designers, and buy. You will find pieces on Moda Operandi that other online retailers aren’t offering, and they will bring you the most promising and loved new and upcoming designers of the moment.</p>
                </div>
           </div>
           <div className='grid lg:grid-cols-[300px_1fr] p-4 my-4 justify-center  gap-4'>
                <div>
                    <h2 className='font-bold'>Why we</h2>
                </div>
                <div>
                    <p>On top of being able to pre-order the latest collections – something that clearly sets Moda Operandi apart from most other online retailers – is the incredible curation of designers, and buy. You will find pieces on Moda Operandi that other online retailers aren’t offering, and they will bring you the most promising and loved new and upcoming designers of the moment.</p>
                </div>
           </div>
           <div className='grid lg:grid-cols-[300px_1fr] p-4 my-4 justify-center  gap-4'>
                <div>
                    <h2 className='font-bold'>Why we</h2>
                </div>
                <div>
                    <p>On top of being able to pre-order the latest collections – something that clearly sets Moda Operandi apart from most other online retailers – is the incredible curation of designers, and buy. You will find pieces on Moda Operandi that other online retailers aren’t offering, and they will bring you the most promising and loved new and upcoming designers of the moment.</p>
                </div>
           </div>

        </div>
    );
};

export default About;