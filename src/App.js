import './App.css';
// import Navbar from './components/navbar/Navbar';
// import { BrowserRouter } from 'react-router-dom';
import Home from './Routes/Home';
import { Route,Routes } from 'react-router';
import HotelListingwithFilter from './Routes/HotelListingwithFilter';
import HotelsDesc from './Routes/HotelsDesc';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/booking" element={<HotelListingwithFilter />}/>
        <Route path="/hotelDescription/:id" element={<HotelsDesc/>}/>
      </Routes>  
    </div>
  );
}

export default App;
