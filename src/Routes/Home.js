// import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Heroimg from "../assets/Hotelimg.jpeg";
const Home = () => {
  return (
    <>
    <Navbar />
    <div>
    <Hero
    cName="hero"
    heroImg={Heroimg}
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination"
    />
    </div>
    </>
  )
}

export default Home;