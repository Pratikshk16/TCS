import React from 'react';
import Slider from "react-slick";
const TestimonialData = [
    {
        id: 1,
        name: "Dilshad",
        text: "Hiring the security guards from this company was the best decision we made for our business. They are professional, vigilant, and always ensure the safety of our premises. Highly recommended!",
        img : "https://aoihdfo",
    },
    {
        id: 2,
        name: "Sabir Ali",
        text: "I have been relying on the security services provided by this company for years, and they have never disappointed. Their guards are well-trained, courteous, and have helped maintain a secure environment for our community.",
        img : "https://aoihdfo",
    },
    {
        id: 3,
        name: "Dipankar Kumar",
        text: "The security guards employed by this company are top-notch! Their presence alone provides peace of mind, and their quick response to any security issue is commendable. I feel safer knowing they are on duty.",
        img : "https://aoihdfo",
    },
    {
        id: 4,
        name: "Satya Narayan",
        text: "Exceptional service! The security guards are not only professional but also friendly and approachable. They go above and beyond to ensure the safety and security of our event attendees. Truly grateful for their dedication.",
        img : "https://aoihdfo",
    },
];


const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='py-14 mb-10'>
        <div className="container">
            {/*header section*/}
            <div className='"text-center mb-10'>
                <h1 className='text-4xl font-bold font-cursive
                text-gray-800'>
                    Testimonials
                </h1>
            </div>

        {/*Testimonials cards Section*/}
        <div>
            <Slider {...settings}>
                {
                    TestimonialData.map((data,index)=> {
                        return(
                            <div className='my-6' key={data.id}>
                                <div className='flex flex-col gap-4
                                shadow-lg py-8 px-6 mx-4 rounded-xl
                                bg-primary/10 relative'>
                                    {/*image section*/}
                                    <div className='mb-4'>
                                        <img src={data.img} alt=""
                                        className='"rounded-full w-20 h-20'
                                        />
                                    </div>
                                    {/*content section*/}
                                    <div className='flex flex-col
                                    items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className="text-xs
                                            text-gray-500">{data.text}</p>
                                            <h1 className="text-xl font-bold
                                            text-black/60 font-cursive">{data.name}</h1>
                                        </div>
                                    </div>

                                    <p className='text-black/20 text-9xl
                                    font-serif absolute top-0 right-0'>,,</p>
                                </div>

                            </div>
                        );
                    })
                }
            </Slider>
        </div>
        </div>
        </div>
    )
}

export default Testimonial
