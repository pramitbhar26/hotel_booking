// import React from 'react'
// import "./HeroStyles.css";
// function Hero (props){
//     return(
//         <>
//         <div className={props.cName}>
//             <img alt="HeroImg" src={props.heroImg}/>
//             <div className="hero-text">
//                 <h1>{props.title}</h1>
//                 <p>{props.text}</p>
//                 <a href={props.url} className={props.btnClass}>
//                    {props.buttonText}
//                 </a>
//             </div>
//         </div>
//         </>
//     )
// }



// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// import "./HeroStyles.css";

// // import required modules
// import { Navigation } from "swiper";
// // import {img1} from "..../assets/Hotelimg.jpeg";
// function Hero(props) {
//   return (
//     <>
//       <Swiper
//         rewind={true}
//         navigation={true}
//         modules={[Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//             <div className="slider">
//                 <img alt="hero" src={props.heroImg}/>
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="slider">
//                 <img alt="hero" src={props.heroImg}/>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }




import React from 'react'
import hotel from "../assets/Hotelimg.jpeg";
import "./HeroStyles.css";
const Hero = () => {
  return (
    <section className='home'>
    <div className="HeroImg">
      <img alt="HeroImg" src={hotel} className='image'/>
    </div>
    </section>
  )
}

export default Hero
