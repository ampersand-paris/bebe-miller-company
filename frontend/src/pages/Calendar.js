// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";

const Calendar = () => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/calendars?sort=Start_Date:desc`)
    
    let events = [];
    let arr = [];
    let yearsArr = [];

    const options = {
        month: "long",
        day: "numeric",
      };

    const timeOption = {
        hour: "numeric",
        minute: "numeric",
      };

    const yearOptions = {
        year: "numeric",
      };

    function getYears(arr) {

        for(let i=0; i < arr.length; i++) {
            let year = null;
            year = new Date(arr[i].attributes.Start_Date).toLocaleString("en-US", yearOptions);
            if (yearsArr.includes(year)) {
                i++
            } else {
                yearsArr.push(year)
            }
        }
        console.log(yearsArr)
        return yearsArr
    }

    function toDateWithOutTimeZone(date: string): Date {
        let tempTime = date.split(":");
        let dt = new Date();
        dt.setHours(tempTime[0]);
        dt.setMinutes(tempTime[1]);
        dt.setSeconds(tempTime[2]);
        dt.toLocaleString()
        new Date(dt).toLocaleString("en-US", timeOption);
        return dt
      }

   

    if (data) {

        events = data.data
        getYears(events)

        return (
            <div className="calendar-page"> 
                <div className="calendar-line"></div>
                <div className="calendar-container"> 
                    <div className="event-list">
                        {events.map((event) => 
                            <div className="event-container">
                                <div className="time-location-container">
                                    <h3>{new Date(event.attributes.Start_Date).toLocaleString("en-US", options)} – {new Date(event.attributes.End_Date).toLocaleString("en-US", options)} <span className="thin-roman">| {new Date(toDateWithOutTimeZone(event.attributes.Time)).toLocaleString("en-US", timeOption)}</span></h3>
                                    <h5>{event.attributes.Location}</h5>
                                </div>
                                <div className="description-link-container">
                                    <p>{event.attributes.Short_Description}</p>
                                    <a href={event.attributes.Ticket_URL}>
                                        <h5>RSVP</h5>
                                    </a>
                                </div>
                                
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Calendar;