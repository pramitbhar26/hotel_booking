// import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
// import Heroimg from "../assets/Hotelimg.jpeg";
// import hotel2 from "../assets/hotel2.jpg";
import Searchbar from '../components/SearchBar/Searchbar';
const Home = () => {
  return (
    <>
    <div>
    <Navbar />
    </div>
    <div>
    <Hero
    // cName="hero"
    // heroImg={Heroimg}
    // title="Your Journey Your Story"
    // text="Choose Your Favourite Destination"
    />
    
  </div>
    <Searchbar />
    <h1>Hello Rooms</h1>
    </>
  )
}

export default Home;