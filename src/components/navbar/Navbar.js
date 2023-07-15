import React,{useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Navbar.css";
import { MenuItems } from '../MenuItems';
import {Link} from "react-router-dom";
const Navbar = () => {
  const [state,setState] = useState(false);
  // handleClicked = () =>{
  //   setState(!state);  
  // }
  
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };
  
  const search = () => {
    // Perform the search operation using the searchQuery value
    // e.g., send an API request, filter data, etc.
    console.log('Searching for:', searchQuery);
    // Update search results in your application state or display them directly
  };
  return (
    <header>
    <div className='container'>
      <nav className='NavbarItems'>
        <div className="nav-logo">
        <i className="fa-solid fa-square-h"></i>otel
        </div>
        <div className='menu-icons' onClick={() => setState(!state)}>
          <i className={state ? "fas fa-times" : "fa-solid fa-bars"}></i>
        </div>
        <div className={state?'hotelHeader':''}>
        <input
            type='text'
            placeholder=' Search by hotels or location'
            className='hotelHeaderSearch'
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <ul className={state ? 'nav-menu active':'nav-menu'}>
            
            {MenuItems.map((item, index) =>{
              return (
                <li key={index}>
                        <Link className ={item.cName} activeClass="active" smooth spy to={item.url}>
                        {item.title}
                        </Link>
                </li>
                );
              })}
            <button className='NavBtn'>Sign Up</button>
        </ul>
      </nav>
    </div>  
    </header>

  )
}

export default Navbar;