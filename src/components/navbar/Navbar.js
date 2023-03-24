import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Navbar.css";
import { MenuItems } from '../MenuItems';
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <body>
    <nav className='NavbarItems'>
      <ul className="nav-logo">
      <i className="fa-solid fa-square-h"></i>otel
      </ul>
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
    </body>
  )
}

export default Navbar;