// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";
import CalendarLogic from "./CalendarLogic";

const ArchiveDetail = (props) => {

    // const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/calendars?sort=Start_Date:desc`)
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/archives/1`)
    console.log(data)
    if (data) {

        return (
            <div className="event-list">
                <h1>Hello World</h1>
            </div>                  
        )
    }
    
}

export default ArchiveDetail;