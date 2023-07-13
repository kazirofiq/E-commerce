// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// function SampleNextArrow(props) {
//     // eslint-disable-next-line react/prop-types
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     // eslint-disable-next-line react/prop-types
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "gray", }}
//             onClick={onClick}
//         />
//     );
// }

export default function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const newProduct = [
        {
            id: 1,
            name: "Tomato",
            image: "https://i.ibb.co/XJzWPRB/fashionable-young-woman-hat-trendy-winter-coat-posing-1.png",
            oldPrice: "20",
            curreantPrice: "17"
        },
        {
            id: 2,
            name: "Onion",
            image: "https://i.ibb.co/XJzWPRB/fashionable-young-woman-hat-trendy-winter-coat-posing-1.png",
            oldPrice: "15",
            curreantPrice: "10"
        },
        {
            id: 3,
            name: "Cauliflowers",
            image: "https://i.ibb.co/XJzWPRB/fashionable-young-woman-hat-trendy-winter-coat-posing-1.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 4,
            name: "Cauliflowers",
            image: "https://i.ibb.co/XJzWPRB/fashionable-young-woman-hat-trendy-winter-coat-posing-1.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
    ]



    return (
        <div className="caurosle lg:w-[1299px] mx-auto my-10 relative lg:block md:block hidden">
            <Slider {...settings}>
                {
                    newProduct.map(product =>
                        // eslint-disable-next-line react/jsx-key
                        <div>
            <div className='bg-[#F6F6F6] lg:block md:block hidden'>
                <div className='relative z-[99999] bg-[#F6F6F6] rounded-md '><img className="w-full" src={product.image} alt="" />
                </div>
                <div className='relative z-[99999] ml-10 -mt-[515px] p-10'>
                <h6 className='text-[#54626E] lg:text-[24px]'>Top Trending Products</h6>
                <h2 className='lg:text-[64px] text-[#000000] font-bold'><span className='lg:whitespace-nowrap'>Best Modern Winter</span> <br />  Clothes Collectiion</h2>
                <p className='text-center border-bt1 py-4 text-[#FFFFFF] bg-[#FA541C] lg:w-[182px] cursor-pointer'>Shop Now</p>
                </div>
            </div>
                        </div >
                    )
                }
            </Slider>
        </div>
    );
}
