// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../../useFetch";

const ProjectMenu = (props) => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/archives?filters[Category][$eq]=Project`)

    let projectMenu = [];
    
    if (data) {

        projectMenu = data.data
        
        return (
                <div className="archive-menu-card" style={{display: props.display}}>         
                    <div className="archive-menu-link-container">
                        {projectMenu.map((project) => 
                            <a href={`/archives/${project.id}`}>
                                <h2>{project.attributes.Title}</h2>
                            </a>
                        )}
                    </div>
                    
                </div>
        )
    }
    
}

export default ProjectMenu;