// import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
// import Heroimg from "../assets/Hotelimg.jpeg";
// import hotel2 from "../assets/hotel2.jpg";
import Searchbar from '../components/SearchBar/Searchbar';
import HotelSlider from '../components/HotelSlider/hotelslider';
import Facilities from '../components/facilities/facilities';
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Searchbar />
      </div>
      <div>
        <HotelSlider />
      </div>
      <div>
        <Facilities />
      </div>
    </>
  )
}

export default Home;