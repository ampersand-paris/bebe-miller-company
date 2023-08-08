// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";
import Calendar from "./Calendar";
const CalendarLogic = () => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/years`)
    const [year, setYear] = useState('2023')
    
    let years = [];

    function calendarHandle(arg) {
        setYear(arg)
        console.log(year)
    }

    if (data) {

        years = data.data;

        return (
            <div className="calendar-page"> 
                <div className="calendar-logic-container"> 
                {years.map((year) => 
                    <h1 onClick={()=> calendarHandle(year.attributes.Year)}>{year.attributes.Year}</h1>
                )}
                </div>
                <div className="calendar-line"></div>
                <div className="calendar-container"> 
                    <Calendar year={year}/>
                </div>
            </div>
        )
    }
    
}

export default CalendarLogic;