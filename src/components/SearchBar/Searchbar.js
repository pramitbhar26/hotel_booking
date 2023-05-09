import React from 'react'
import './Searchbar.css'
const Searchbar = () => {
  return (
    <div className='headerSearch'>
      <div className='searchContainer'>

        <div className='headerSearchItem'>
          {/* <div className='icondiv'> */}
        <i class="fas fa-map-marker-alt" style={{color: "#000000",}}></i>
          {/* </div> */}
          <input
           type='text'
           placeholder='Where are you going'
           className='HeaderSearchInput'
          />   
        </div>
        <div className='headerSearchItem'>
        {/* <div className='icondiv'> */}
        <i class="fa-solid fa-calendar-days"></i>
        {/* </div> */}
        <span className='headerSearchtext'>
          Date to date
        </span>
        </div>
        <div className='headerSearchItem'>
        {/* <div className='icondiv'> */}
        <i class="fa-solid fa-person"></i>
        {/* </div> */}
        <span className='hearderSearchtext'> 2 Adult 2 Children 1 room</span>
        </div>
        <div className='headerSearchItem'>
        <button className='headerSearchBtn'>
        <i class="fa fa-search" aria-hidden="true"></i>

        {/* <i class="fa-thin fa-magnifying-glass"></i> */}
        Search Hotels</button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar