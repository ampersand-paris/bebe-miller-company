// React Dependendecies
import React from "react";
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// Components
import useFetch from "../useFetch";
import CalendarLogic from "./CalendarLogic";

const Calendar = (props) => {

    // const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/calendars?sort=Start_Date:desc`)
    // const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/years?filters[Year][$eq]=${props.year}&populate=*`)
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/years?populate=*`)

    let events = [];
    let years = [];
    let arr = [];
    let yearsArr = [];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear().toString()
    let eventBlock = null;
    let style = getComputedStyle(document.body)
    let height = style.getPropertyValue('--app-height') / 2 

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

    function setCalendar(arr) {

        let date = null;

        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].attributes.Year, currentYear)

            if (arr[i].attributes.Year === currentYear) {
                date = arr[i].attributes.calendars.data
            }
        } 

        date.reverse()

        for (let i = 0; i < date.length; i++) {

            if ( new Date(date[i].attributes.Start_Date) < currentDate ) {

            } else {
                eventBlock = date[i].id

                date.reverse()
                return           
            }
        }

        date.reverse()
        eventBlock = date[0].id
        return 
    }
  
    function parseArray(data) {

        for (let i = 0; i < data.length; i++) {
            data[i].attributes.calendars.data.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.attributes.Start_Date) - new Date(a.attributes.Start_Date);
            }); 
        }
        return data
    }

    if (data) {

        years = data.data;
        console.log(years)
        
        parseArray(years);
        setCalendar(years);

        window.setTimeout( () => {
            console.log(`setTimeout`, document.getElementById(eventBlock))
            document.getElementById(eventBlock).scrollIntoView({ 
                block: 'center', 
                behavior: 'smooth', 
                inline: 'center'
            })
        }, 1000); 



        // year = data.data[0]
        // events = year.attributes.calendars.data

        // events.sort(function(a,b){
        //     // Turn your strings into dates, and then subtract them
        //     // to get a value that is either negative, positive, or zero.
        //     return new Date(b.attributes.Start_Date) - new Date(a.attributes.Start_Date);
        // }); 

        // setCalendar(events)

        // if (year.attributes.Year === '2024') {
        //     console.log(year.attributes.Year)
        //     window.setTimeout( () => {
        //         // console.log(`setTimeout`, document.getElementById(eventBlock))
        //         document.getElementById(eventBlock).scrollIntoView({ 
        //             block: 'center', 
        //             behavior: 'smooth', 
        //             inline: 'center'
        //         })
        //     }, 3000); 
        // }
        

        return (
            <div className="event-list">
                {years.map((year) =>
                    <div className="year-container" id={year.attributes.Year}>
                        <div className="time-location-container">
                        <h1 className="year-emph">{ year.attributes.Year }</h1>
                        </div>
                        <div className="description-link-container"></div>
                        {year.attributes.calendars.data.map((event) => 
                            <div id={event.id} className="event-container">
                                <div className="time-location-container">
                                    <h3>{new Date(event.attributes.Start_Date).toLocaleString("en-US", options)} 
                                        { event.attributes.End_Date ? ( <span>– {new Date(event.attributes.End_Date).toLocaleString("en-US", options)}</span> ) : null } 
                                        { event.attributes.Time ? (
                                            <span className="thin-roman"> | { event.attributes.Time }</span>) : (null)
                                        }
                                    </h3>
                                    <h3>{new Date(event.attributes.Start_Date).toLocaleString("en-US", options)} – {new Date(event.attributes.End_Date).toLocaleString("en-US", options)} <span className="thin-roman">| {new Date(toDateWithOutTimeZone(event.attributes.Time)).toLocaleString("en-US", timeOption)}</span></h3>
                                    <h5>{event.attributes.Location}</h5>
                                </div>
                                <div className="description-link-container">
                                    <h3>{ event.attributes.Event_Title }</h3>
                                    <BlocksRenderer content={event.attributes.Description}/>
                                        { event.attributes.Ticket_URL ? ( 
                                            <a className="calendar-link" target="_blank" href={event.attributes.Ticket_URL}>
                                                <h5>Info / RSVP</h5>
                                            </a>
                                            ) : (null)
                                        }
                                </div>          
                            </div>
                        )}  
                    </div>
                )}
            </div>              
        )
    }
    
}

export default Calendar;