// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SampleNextArrow(props) {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", }}
            onClick={onClick}
        />
    );
}

export default function PopularCategories() {
    var settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
            id: 4,
            name: "Cauliflowers",
            image: "https://i.ibb.co/bWRkHqz/Rectangle-6467-2.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 5,
            name: "Cauliflowers",
            image: "https://i.ibb.co/xgzvSmK/Rectangle-6467-3.png",
            oldPrice: "30",
            curreantPrice: "23"
        },
    ]



    return (
        <div className="caurosle relative lg:block md:block hidden">
            <Slider {...settings}>
                {
                    newProduct.map(product =>
                        // eslint-disable-next-line react/jsx-key
                        <div>
                            <div className='hover:shadow-xl rounded-md py-5'>
                            <img className='mx-auto' src={product.image} alt="" />
                            <h4 className='text-center mt-4 text-[24px] cursor-pointer text-[#383838] font-bold hover:text-[#FA541C]'>Winter Quality jacket</h4>
                            <p className='text-center'>(390 items)</p>
                        </div>
                        </div >
                    )
                }
            </Slider>
        </div>
    );
}
