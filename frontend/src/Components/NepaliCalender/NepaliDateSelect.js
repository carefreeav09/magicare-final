import React, {Component, useEffect, useState} from 'react';
import PopupDialog from './PopupDialog';
import NepaliDate from './NepaliDate';
import './calender.css';


const NepaliDateSelect = props => {
  const [state, setState] = useState({isVisible: false});
  const [today, setToday] = useState(null);
  const {calenderProps} = props;
  let wrapperRef = null;

  useEffect(()=>{
    setToday(NepaliDate.fromgregorian(new Date()));
    document.addEventListener('mousedown', handleClickOutside);

    return ()=>{
      document.removeEventListener('mousedown',handleClickOutside);
    }
  }, []);


  const handleClickOutside = (event) =>{
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      setState({...state, isVisible: false, });
    }
  };

  const setWrapperRef = node => {
    wrapperRef = node;
  };

  const togglePopup = () => {
    setState({...state, isVisible: !state.isVisible})
  };

  const handleDateSelect = ({year,month,day}) => {
      let date = year + "/" + month + "/" + day;
      console.log(date);

    calenderProps && calenderProps.handleSelectedDate(date);

    setState({
      isVisible: true
    });
  };

    return (
      <div ref={setWrapperRef} className="nepali-date-select">
        <div onClick={togglePopup} className="date-display">{calenderProps && calenderProps.selectedDate && calenderProps.selectedDate.date}</div>
        {state.isVisible && <PopupDialog onSelectDate={handleDateSelect} year={today.nepaliYear} month={today.nepaliMonth} day={today.day}/>}
      </div>
    );
}

export default NepaliDateSelect;
