// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../../useFetch";

const WorkMenu = (props) => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/archives?filters[Category][$eq]=Work`)

    let workMenu = [];
    
    if (data) {

        workMenu = data.data

        return (
                <div className="archive-menu-card"  id="works-menu" style={{display: props.display}}> 
                    <div className="archive-menu-link-container">
                        {workMenu.map((work) => 
                            <a href={`/archives/${work.id}`}>
                                <h2>{work.attributes.Title}</h2>
                            </a>
                        )}
                    </div>      
                </div>
        )
    }
    
}

export default WorkMenu;