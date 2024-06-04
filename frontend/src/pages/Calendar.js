// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// Components
import useFetch from "../useFetch";
import CalendarLogic from "./CalendarLogic";

const Calendar = (props) => {

    // const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/calendars?sort=Start_Date:desc`)
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/years?filters[Year][$eq]=${props.year}&populate=*`)
    
    let events = [];
    let year = [];
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
        year = data.data[0]
        events = year.attributes.calendars.data

        events.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.attributes.Start_Date) - new Date(a.attributes.Start_Date);
          });

        return (
            <div className="event-list">
                {events.map((event) => 
                    <div className="event-container">
                        <div className="time-location-container">
                            <h3>{new Date(event.attributes.Start_Date).toLocaleString("en-US", options)} 
                                { event.attributes.End_Date ? ( <span>– {new Date(event.attributes.End_Date).toLocaleString("en-US", options)}</span> ) : null } 
                                { event.attributes.Time ? (
                                    <span className="thin-roman"> | { event.attributes.Time }</span>) : (null)
                                }
                            </h3>
                            {/* <h3>{new Date(event.attributes.Start_Date).toLocaleString("en-US", options)} – {new Date(event.attributes.End_Date).toLocaleString("en-US", options)} <span className="thin-roman">| {new Date(toDateWithOutTimeZone(event.attributes.Time)).toLocaleString("en-US", timeOption)}</span></h3> */}
                            <h5>{event.attributes.Location}</h5>
                        </div>
                        <div className="description-link-container">
                            <p>{event.attributes.Short_Description}</p>
                                { event.attributes.Ticket_URL ? ( 
                                    <a target="_blank" href={event.attributes.Ticket_URL}>
                                        <h5>RSVP</h5>
                                    </a>
                                    ) : (null)
                                }
                        </div>          
                    </div>
                )}
            </div>                  
        )
    }
    
}

export default Calendar;