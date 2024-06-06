// React Dependendecies
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../../useFetch";
import ProjectMenu from "./ProjectMenu";
import WorkMenu from "./WorkMenu";

const ArchiveMenu = (props) => {

    const [projBg, setProjBg] = useState('var(--lightest-grey');
    const [projDisplay, setProjDisplay] = useState('none');
    const [workBg, setWorkBg] = useState('var(--white');
    const [workDisplay, setWorkDisplay] = useState('flex');
    const [subMenuHeight, setSubMenuHeight] = useState('flex');

    function projMenuHandler() {
        if (projBg === 'var(--white') {
            return
        } else {
            setProjBg('var(--white)')
            setProjDisplay('flex')
            setWorkBg('var(--lightest-grey')
            setWorkDisplay('none')
        }
    }

    function workMenuHandler() {
        if (workBg === 'var(--white') {
            return
        } else {
            setWorkBg('var(--white)')
            setWorkDisplay('flex')
            setProjBg('var(--lightest-grey')
            setProjDisplay('none')
        }
    }

   
    return (
            <div className="archive-menu-wrapper" style={{gridTemplateRows: props.height}}>
                <div className="inner">
                    <div className="archive-menu-bttn-container">
                        <h1 className="archive-menu-bttn" style={{backgroundColor: projBg}} onMouseEnter={()=> projMenuHandler()}>Projects</h1>
                        <h1 className="archive-menu-bttn" style={{backgroundColor: workBg}} onMouseEnter={()=> workMenuHandler()}>Pieces</h1>
                    </div>
                    <div className="archive-menu-container">
                        <ProjectMenu display={projDisplay}/>
                        <WorkMenu display={workDisplay}/>
                    </div>
                    <div className="archive-menu-toggle" onClick={() => props.handleCallBack('0fr')}>
                        <svg id="archive-menu-triangle" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.02 29.39" fill="var(--main-green">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <polygon class="cls-1" points="13.51 29.39 27.02 29.39 20.27 14.69 13.51 0 6.76 14.69 0 29.39 13.51 29.39"/>
                        </g>
                        </svg>
                    </div>
                </div>
            </div>
    )
}

export default ArchiveMenu;