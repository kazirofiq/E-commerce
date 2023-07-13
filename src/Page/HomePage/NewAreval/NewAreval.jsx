// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img5 from "../../../assets/bg-image/popular-brad/Frame 1000001723.png"


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

export default function NewAreval() {
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
        <div>
            <h2 className="text-center text-[36px] font-bold">New Arrival</h2>
            <p className="text-center mb-5">Shop our new arrivals from popular brands</p>
        <div className="caurosle relative lg:block md:block hidden">
            <Slider {...settings}>
                {
                    newProduct.map(product =>
                        // eslint-disable-next-line react/jsx-key
                        <div>
                    <div className="hover:relative">
                    <div className="hovere:lg:absolute w-full hover:lg:z-[-9999]"><img className='lg:w-[95%]' src={product.image} alt="" /></div>
                    <div className=''>
                   <p className='bg-[#FA541C] hidden hover:block px-[115px] py-4 cursor-pointer shadow-lg hover:lg:absolute hover:lg:z-[9999] hover:lg:mt-[344px]'>Shop Now</p>
                    <h2>Calvin Klein Hoodie</h2>
                    <div className='flex justify-between mr-2 items-center gap-4'>
                        <img src={img5} alt="" />
                        <p className='text-[#FA541C] text-[24px] font-bold'>$270.00</p>
                    </div>
                   </div>
                </div>
                            {/* <div className="h-56 border w-64 rounded-2xl ml-4 shadow ">
                                <div className="flex justify-between mx-7 mt-5">
                                    <p className="bg-lime-600 text-white font-bold text-sm px-1 rounded-lg">Fresh</p>
                                    <p className="bg-red-600 text-white font-bold text-sm px-1 rounded-lg">Sale 30%</p>
                                </div>
                                <img className="h-4/5 ml-4 w-52" src={product.image} alt=""></img>
                            </div> */}
                        </div >
                    )
                }
            </Slider>
        </div>
        </div>
    );
}
