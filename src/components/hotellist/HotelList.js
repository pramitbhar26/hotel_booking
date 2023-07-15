import React, { useState } from 'react'
import "./HotelList.css"
import { format, setDate } from 'date-fns'
import { useLocation, useNavigate } from 'react-router'
import { DateRange } from 'react-date-range'
const HotelList = () => {
  const location = useLocation();
  const [destination, setdestination] = useState(location.state.destination);
  const [date, setdate] = useState(location.state.date);
  const [options, setoptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (

    <div className='listContainer'>
      <div className='listWrapper'>
        <div className='listSearch'>
          <h1 className='lsTitle'>Filters</h1>
          <div className='lsItem'>
            <h3>Destination</h3>
            {destination == "" ? <input type='text' placeholder='Enter your Destination' className='desti'/> : <input type='text' value={destination} className='desti'/>}
          </div>
          <div className='lsItem'>
            <h3>Dates</h3>
            <div className='dates'>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (
              <DateRange
              onChange={(item) => setdate([item.selection])}
              minDate={new Date()}
              ranges={date}
              />
              )}
              </div>
          </div>
          <div className='lsItem'>
            <h3>Price</h3>
            <div className='lsOptionItem'>
              <div className='lsOptionItem1'>
                <input className='lsOptionInput' type='number' placeholder='From' />
              </div>
              <div className='lsOptionItem2'>
                <input className='lsOptionInput' type='number' placeholder='To' />
              </div>
            </div>
          </div>
          <div className='lsItem'>
            <h3>Conveniences</h3>
              <div className='lsItemBdiv'>
              <button className='lsItemButton1'>
              <i class="fas fa-tv"></i>
                &nbsp;TV</button>
              <button className='lsItemButton2'>
              <i class="fab fa-accessible-icon"></i>
                &nbsp;Disabled Access</button>
              </div>
              <div className='lsItemBdiv'>

              <button className='lsItemButton3'>
              <i class="fas fa-tree"></i>
                &nbsp;In the woods</button>
              <button className='lsItemButton4'>
              <i class="fas fa-hot-tub"></i>
                &nbsp;Hot Tubs</button>
              </div>
              <div className='lsItemBdiv'>

              <button className='lsItemButton1'>
              <i class="fas fa-eye"></i>
                &nbsp;Views</button>
              <button className='lsItemButton2'>
              <i class="fas fa-water"></i>
                &nbsp;Lakes & Rivers</button>
              </div>
              <div className='lsItemBdiv'>
                
              <button className='lsItemButton3'>
              <i class="fa-solid fa-fire"></i>
                &nbsp;Campfire</button>
              <button className='lsItemButton2'>
              <i class="fa-solid fa-paw"></i>
                &nbsp;Dog Friendly</button>
              </div>
              <div className='lsItemBdiv'>

              <button className='lsItemButton1'>
              <i class="fas fa-wifi"></i>
              &nbsp;Wifi</button>
              <button className='lsItemButton2'>
              <i class="fa-solid fa-bath"></i>
                &nbsp;Outdoor Baths</button>
              </div>
          </div>
          <div className='lsItem'>
            <h3>Number of guests</h3>
            
          </div>
        </div>
        <div className='listResult'>

        </div>
      </div>

    </div>
  )
}

export default HotelList