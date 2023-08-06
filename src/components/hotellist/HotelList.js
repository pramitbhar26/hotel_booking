import React, { useState,useEffect } from 'react'
import "./HotelList.css"
import { format, setDate } from 'date-fns'
import { useLocation, useNavigate } from 'react-router'
import { DateRange } from 'react-date-range'
import SearchItem from '../searchItem/SearchItem'
import useFetch from '../../hooks/useFetch.js'
import axios from 'axios'
const HotelList = () => {
  const location = useLocation();
  const [destination, setdestination] = useState(location.state.destination);
  console.log(destination);
  // const data=[];
  // const loading=false;
  const [date, setdate] = useState(location.state.date);
  const [options, setoptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min,setMin] = useState(undefined);
  const [max,setMax] = useState(undefined);
  const reset = ()=>{
    setdestination(" ");
    // setdate(new Date());
    setoptions({
      Adult:1,
    Children:0,
    Room:1
    });
  };
  const {data, loading, error, reFetch } = useFetch(`http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  
  const handleOption = (name, operation) => {
    setoptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleClick = ()=>{
    reFetch()
  };

  return (

    <div className='listContainer'>
      <div className='listWrapper'>
        <div className='listSearch'>
          <div className='parallel'>
          <h1 className='lsTitle'>Filters</h1>
          <button className='lsReset' onClick={reset}>Reset</button>
          </div>
          <div className='lsItem'>
            <h3>Destination</h3>
            {/* {destination ==" "? <input type='text' placeholder='Enter your Destination' onChange={(e)=>setdestination(e.target.value)} className='desti' /> :  */}
            <input type='text' placeholder='Enter your destination' value={destination} onChange={(e)=>setdestination(e.target.value)} className='desti' />
            {/* } */}
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
                <input className='lsOptionInput' onChange={e=>setMin(e.target.value)} type='number' placeholder='From' />
              </div>
              <div className='lsOptionItem2'>
                <input className='lsOptionInput' onChange={e=>setMax(e.target.value)} type='number' placeholder='To' />
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
            <div className='optionCounter'>
              <button
                disabled={options.Adult <= 1}
                className='lsItemGuestButton'
                onClick={() => handleOption("Adult", "d")}>
                -
              </button>
              <span>{options.Adult}</span>
              {/* <p>{options.Adult}</p> */}
              <button
                className='lsItemGuestButton'
                onClick={() => handleOption("Adult", "i")}>
                +
              </button>
            </div>
          </div>

          <div className='lsItem'>
            <h3>Number of Rooms</h3>
            <div className='optionCounter'>
              <button
                disabled={options.Room <= 1}
                className='lsItemGuestButton'
                onClick={() => handleOption("Room", "d")}>
                -
              </button>
              {/* <span className='lsItemGuestCount'>{options.Adult}</span> */}
              <p>{options.Room}</p>
              <button
                className='lsItemGuestButton'
                onClick={() => handleOption("Room", "i")}>
                +
              </button>
            </div>

          </div>
          <div className='lsItem'>
            <button className='SubmitButton' onClick={handleClick}>Apply</button>
          </div>
        </div>
        <div className='listResult'>
          <h1 className='listResultCounter'>{data.length}Results</h1>
           {loading? "loading" : <>
            {data.map(item=>(
              <SearchItem item={item} key={item._id} />
            ))}
           </>}
        </div>
      </div>

    </div>
  )
}

export default HotelList