import React from 'react'
import './Searchbar.css'
const Searchbar = () => {
  return (
    <div className='headerSearch'>
        <div className='headerSearchItem'>
        <i class="fa-solid fa-bed" className='headericon'></i>
        <input
           type='text'
           placeholder='Where are you going'
           className='HeaderSearchInput'
        />   
        </div>
        <div className='headerSearchItem'>
        <i class="fa-solid fa-calendar-days" className='headericon'></i>
        <span className='headerSearchtext'>
          Date to date
        </span>
        </div>
        <div className='headerSearchItem'>
        <i class="fa-solid fa-person"></i>
        <span className='hearderSearchtext'> 2 Adult 2 Children 1 room</span>
        </div>
    </div>
  )
}

export default Searchbar