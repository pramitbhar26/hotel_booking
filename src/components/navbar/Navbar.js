import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Navbar.css";
import { MenuItems } from '../MenuItems';
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <header>
    <div className='container'>
      <nav className='NavbarItems'>
        <div className="nav-logo">
        <i className="fa-solid fa-square-h"></i>otel
        </div>
        <ul className='nav-menu'>
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