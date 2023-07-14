// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from './Banner/Banner';
import PopularCategories from './PopularCategories/PopularCategories';
import WinterCategories from './WinterCategories/WinterCategories';
import NewAreval from './NewAreval/NewAreval';
import WinterBanner from './WinterBanner/WinterBanner';
import BestSels from '../BestSels/BestSels';
import LetestBlog from './LetestBlog/LetestBlog';
import NewsLetter from './NewsLetter/NewsLetter';



const HomePage = () => {
    return (
        <div className='lg:w-[1299px] mx-auto'>
            <Banner></Banner>
            <PopularCategories></PopularCategories>
            <WinterCategories></WinterCategories>
            <NewAreval></NewAreval>
            <WinterBanner></WinterBanner>
            <BestSels></BestSels>
            <LetestBlog></LetestBlog>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default HomePage;