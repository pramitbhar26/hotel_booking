import React, { useRef, useState } from 'react';
import "./hotelslider.css";
import img1 from "../assets/img01.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const hotelslider = () => {
    return (
        <div>
            <div className='heading'>
                <h1>
                    Stay at our top unique properties
                </h1 >
            </div>
            <div className='slider'>
                {/* <div className='featured'>
                <div className='featuredItems'>
                    <img src={img1} alt='hotelImg' className='featuredImg'/>
                </div> */}
                <Swiper
                    // slidesPerView={3}
                    // spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        850: {
                            slidesPerView: 2,
                            spaceBetween: 1,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img src={img1} alt='hotelImg' className='sliderImg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt='hotelImg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt='hotelImg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt='hotelImg' />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default hotelslider