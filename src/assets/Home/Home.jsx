// eslint-disable-next-line no-unused-vars
import React from 'react';
import TopTradingProduct from './TopTradingProduct/TopTradingProduct';
import PopularCategories from './PopularCategories/PopularCategories';
import LatestBlogs from './LatestBlogs/LatestBlogs';
import ProductSlider from './Slider/ProductSlider';
import BestSels from '../../Page/BestSels/BestSels';



const Home = () => {
    return (
        <div className='lg:w-[1299px] mx-auto'>
            <TopTradingProduct></TopTradingProduct>
            <PopularCategories></PopularCategories>
            {/* <PopularBrands></PopularBrands> */}
            <ProductSlider></ProductSlider>
            <LatestBlogs></LatestBlogs>
            <BestSels></BestSels>

        </div>
    );
};

export default Home;
