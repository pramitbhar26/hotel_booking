import './App.css';
// import Navbar from './components/navbar/Navbar';
// import { BrowserRouter } from 'react-router-dom';
import Home from './Routes/Home';
import { Route,Routes } from 'react-router';
import HotelListingwithFilter from './Routes/HotelListingwithFilter';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/booking" element={<HotelListingwithFilter />}/>
      </Routes>  
    </div>
  );
}

export default App;
