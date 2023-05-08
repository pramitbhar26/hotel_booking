import React,{useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Navbar.css";
import { MenuItems } from '../MenuItems';
import {Link} from "react-router-dom";
const Navbar = () => {
  const [state,setState] = useState("true");
  // handleClicked = () =>{
  //   setState(!state);  
  // }

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
            <button>Sign Up</button>
        </ul>
      </nav>
    </div>  
    </header>

  )
}

export default Navbar;