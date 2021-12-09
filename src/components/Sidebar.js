import React from "react";
import {FaInbox, FaRegCalendarAlt, FaRegCalendar} from "react-icons/fa";

const Sitebar = ({selected, setselected}) =>{
    console.log(selected);
    return (<div className="sitebar">
       
    <div className={selected === "Inbox" ? "active" : ""} onClick={() => setselected('Inbox')}>
        <FaInbox className="icons"  />Inbox</div>
    <div className={selected === "Today" ? "active" : ""} onClick={() => setselected('Today')}>
        <FaRegCalendarAlt className="icons" />Today</div>
    <div className={selected === "Next" ? "active" : ""} onClick={() => setselected('Next')}>
        <FaRegCalendar className="icons" />Next 7 days</div>
    

    </div>)
}
export default Sitebar;