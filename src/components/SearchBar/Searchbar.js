import React from 'react'
import './Searchbar.css'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
const Searchbar = () => {
  const [openDate,setopenDate] = useState(false);
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <div className='headerSearch'>
      <div className='searchContainer'>

        <div className='headerSearchItem'>
          {/* <div className='icondiv'> */}
          <i class="fas fa-map-marker-alt" style={{ color: "#000000", }}></i>
          {/* </div> */}
          <input
            type='text'
            placeholder='Where are you going?'
            className='HeaderSearchInput'
          />
        </div>
        <div className='headerSearchItem'>
          {/* <div className='icondiv'> */}
          <i class="fa-solid fa-calendar-days"></i>
          {/* </div> */}
          <span onClick={() => setopenDate(!openDate)} className='headerSearchtext'>
          {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
          </span>
          { openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setdate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
          />}
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