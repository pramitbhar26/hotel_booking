import React from 'react'
import './Searchbar.css'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router';
const Searchbar = () => {
  const [openDate,setopenDate] = useState(false);
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [destination,setdestination] = useState("")
  const [openOptions,setopenOptions] =useState(false);
  const [options,setoptions] =useState({
    Adult:1,
    Children:0,
    Room:1
  });

  const handleOption = (name, operation) => {
    setoptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate= useNavigate();
  const handleSearch=() => {
        navigate("/booking",{state: {destination,date,options}});
  };

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
            onChange={(e)=>setdestination(e.target.value)}
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
          <span onClick={()=>setopenOptions(!openOptions)} className='hearderSearchtext'>{`${options.Adult}Adult.${options.Children}Children.${options.Room}Room`}</span>
          {openOptions && (
              <div className='options'>
                <div className='optionItem'>
                  <span className='optionText'>Adult</span>
                  <div className='optionCounter'>
                      <button
                        disabled={options.Adult<=1}
                        className='optionCounterButton'
                        onClick={()=>handleOption("Adult","d")}
                      >
                      -
                      </button>
                      <span className='optionCounterNumber'>{options.Adult}</span>
                      <button
                        className='optionCounterButton'
                        onClick={()=>handleOption("Adult","i")}
                      >
                      +
                      </button>
                  </div>
                </div>

        
                <div className='optionItem'>
                  <span className='optionText'>Children</span>
                  <div className='optionCounter'>
                      <button
                        disabled={options.Children<=0}
                        className='optionCounterButton'
                        onClick={()=>handleOption("Children","d")}
                      >
                      -
                      </button>
                      <span className='optionCounterNumber'>{options.Children}</span>
                      <button
                        className='optionCounterButton'
                        onClick={()=>handleOption("Children","i")}
                      >
                      +
                      </button>
                  </div>
                </div>


                <div className='optionItem'>
                  <span className='optionText'>Room</span>
                  <div className='optionCounter'>
                      <button
                        disabled={options.Room<=1}
                        className='optionCounterButton'
                        onClick={()=>handleOption("Room","d")}
                      >
                      -
                      </button>
                      <span className='optionCounterNumber'>{options.Room}</span>
                      <button
                        className='optionCounterButton'
                        onClick={()=>handleOption("Room","i")}
                      >
                      +
                      </button>
                  </div>
                </div>
              
              </div>
          )}
        </div>
        <div className='headerSearchItem'>
          <button className='headerSearchBtn' onClick={handleSearch}>
            <i class="fa fa-search" aria-hidden="true"></i>

            {/* <i class="fa-thin fa-magnifying-glass"></i> */}
            Search Hotels</button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar