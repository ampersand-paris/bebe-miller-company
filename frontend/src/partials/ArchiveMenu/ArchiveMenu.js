// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../../useFetch";
import ProjectMenu from "./ProjectMenu";
import WorkMenu from "./WorkMenu";

const ArchiveMenu = () => {

    const [projBg, setProjBg] = useState('var(--white');
    const [projWidth, setProjWidth] = useState('flex');
    const [workBg, setWorkBg] = useState('var(--lightest-grey');
    const [workWidth, setWorkWidth] = useState('none');


    function projMenuHandler() {
        if (projBg === 'var(--white') {
            return
        } else {
            setProjBg('var(--white)')
            setProjWidth('flex')
            setWorkBg('var(--lightest-grey')
            setWorkWidth('none')
        }
    }

    function workMenuHandler() {
        if (workBg === 'var(--white') {
            return
        } else {
            setWorkBg('var(--white)')
            setWorkWidth('flex')
            setProjBg('var(--lightest-grey')
            setProjWidth('none')

        }
    }

    return (
            <div className="archive-menu-wrapper"> 
                <div className="archive-menu-bttn-container">
                    <h1 className="archive-menu-bttn" style={{backgroundColor: projBg}} onClick={()=> projMenuHandler()}>Projects</h1>
                    <h1 className="archive-menu-bttn" style={{backgroundColor: workBg}} onClick={()=> workMenuHandler()}>Works</h1>
                </div>
                <div className="archive-menu-container">
                    <ProjectMenu display={projWidth}/>
                    <WorkMenu display={workWidth}/>
                </div>
                <div className="archive-menu-toggle">
                <svg id="archive-menu-triangle" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.02 29.39" fill="var(--main-green">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <polygon class="cls-1" points="13.51 29.39 27.02 29.39 20.27 14.69 13.51 0 6.76 14.69 0 29.39 13.51 29.39"/>
                    </g>
                    </svg>
                </div>
            </div>
    )
}

export default ArchiveMenu;