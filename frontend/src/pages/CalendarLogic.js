// React Dependendecies
import React from "react";
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";
import Calendar from "./Calendar";
const CalendarLogic = () => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/years`)
    const [year, setYear] = useState(new Date().getFullYear())
    const [selected, setSelectd] = useState('2024')
   
    let years = [];
    let selectedYear = null;

    function calendarHandle(id) {
        console.log(document.getElementById(id))
        document.getElementById(id).scrollIntoView({ 
            block: 'start', 
            behavior: 'smooth', 
            inline: 'start'
        })
        // document.getElementById('test').firstChild.style.textDecoration = 'none';
        // setYear(arg)
        // if (id == selected) {
        //     setYear(arg)
        // } else {
        //     selectedYear = document.getElementById(id)
        //     document.querySelectorAll('.underline-emph').forEach( (element)=> {
        //     element.classList.remove('underline-emph')
        //     })
        //     selectedYear.classList.add('underline-emph')
        //     setSelectd(id)
        // }
    }

    // useEffect((data) => {
    //     console.log(selected)
    //     selectedYear = document.getElementById(selected)
    //     console.log(selectedYear)
    //     selectedYear.classList.add('underline-emph')
    // });

    if (data) {

        years = data.data;

        return (
            <div className="calendar-page"> 
                <div className="calendar-line"></div>
                <div id='test' className="calendar-logic-container"> 
                {years.map((year, index) => 
                    <h1 className="calendar-logic-year" index={ year.attributes.Year } onClick={()=> calendarHandle(year.attributes.Year)}>{year.attributes.Year }</h1>
                )}
                </div>
                <div className="calendar-container"> 
                    <Calendar year={year}/>
                </div>
            </div>
        )
    }
    
}

export default CalendarLogic;