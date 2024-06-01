// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ReachMarkdown from 'react-markdown';
// Components
import useFetch from "../useFetch";
import FullImage from "../components/FullImage";
import Quote from "../components/Quote";
import AboutBody from "../components/AboutBody";
import AboutHeader from "../components/AboutHeader";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Teachings from "./Teachings";
import Press from "./Press";
import Choreography from "./Choreography";

const ForumGrid = (props) => {

    // const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/forum-page?populate[Forum_Page][populate]=*&populate[forums]=*?pagination[page]=1&pagination[pageSize]=3`)
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/forums?filters[featured][$not]=true&[populate]=*`)
    const [index, setIndex] = useState(0)

    let forums = [];
    let display = [];
    let start = 1;
    let end = null;
    let current = 1;

    const options = {
        month: "long",
        day: "numeric",
      };

    if (data) {

        forums = data.data

        function findStartAndEnd() {
            let length = forums.length;
            if (forums.length > 6) {
                end = Math.ceil(length / 6);
            } else {
                return
            }       
        }

        function increasePagination() {
            setIndex(index + 6)
        }

        function decreasePagination() {
            setIndex(index - 6)
        }

        findStartAndEnd()

        return (
     
            <>
                <div className="forum-container">
                    { forums[index] ? (
                        <div className="forum-card" style={{backgroundImage: `url(${forums[index].attributes.Header_Image.data.attributes.url})`}}>
                            <div className="forum-title">
                                <h1>{forums[index].attributes.Forum_Title}</h1>
                                <a href={`/forum/${forums[index].id}`}><h5>Read more</h5></a>
                            </div>
                        </div>
                    ) : <div className="forum-card"></div> }
                    <div className="forum-card">
                    </div>
                    <div className="forum-card pagination">
                        {/* { index + 6 < 7 ? ( null ) : ( 
                            <h3 onClick={() => decreasePagination()}>&#60; ...</h3>
                        )}
                        <h3>{ start } ...</h3>
                        <h3>{ current } ...</h3>
                        <h3>{ end }</h3>
                        { index + 6 > forums.length ? ( null ) : ( 
                            <h3 onClick={() => increasePagination()}>&#62;</h3>
                        )} */}
                    </div>
                    { forums[index+1] ? (
                        <div className="forum-card" style={{backgroundImage: `url(${forums[index+1].attributes.Header_Image.data.attributes.url})`}}>
                            <div className="forum-title">
                                <h1>{forums[index+1].attributes.Forum_Title}</h1>
                                <a href={`/forum/${forums[index+1].id}`}><h5>Read more</h5></a>
                            </div>
                        </div>
                    ) : <div className="forum-card"></div> }
                    { forums[index+2] ? (
                    <div className="forum-card" style={{backgroundImage: `url(${forums[index+2].attributes.Header_Image.data.attributes.url})`}}>
                        <div className="forum-title">
                            <h1>{forums[index+2].attributes.Forum_Title}</h1>
                            <a href={`/forum/${forums[index+2].id}`}><h5>Read more</h5></a>
                        </div>
                    </div>
                    ): <div className="forum-card"></div> }
                    { forums[index+2] ? (
                    <div className="forum-card">
                    </div>
                    ): <div className="forum-card"></div> }
                    { forums[index+3] ? (
                    <div className="forum-card" style={{backgroundImage: `url(${forums[index+3].attributes.Header_Image.data.attributes.url})`}}>
                        <div className="forum-title">
                            <h1>{forums[index+3].attributes.Forum_Title}</h1>
                            <a href={`/forum/${forums[index+3].id}`}><h5>Read more</h5></a>
                        </div>
                    </div>
                    ): <div className="forum-card"></div> }
                    { forums[index+4] ? (
                    <div className="forum-card" style={{backgroundImage: `url(${forums[index+4].attributes.Header_Image.data.attributes.url})`}}>
                        <div className="forum-title">
                            <h1>{forums[index+4].attributes.Forum_Title}</h1>
                            <a href={`/forum/${forums[index+4].id}`}></a><h5>Read more</h5>
                        </div>
                    </div>
                    ): <div className="forum-card"></div> }
                    { forums[index+5] ? (
                    <div className="forum-card" style={{backgroundImage: `url(${forums[index+5].attributes.Header_Image.data.attributes.url})`}}>
                        <div className="forum-title">
                            <h1>{forums[index+5].attributes.Forum_Title}</h1>
                            <a href={`/forum/${forums[index+5].id}`}></a><h5>Read more</h5>
                        </div>
                    </div>
                    ): <div className="forum-card"></div> }
                </div>    
            </>       
        )
    }
    
}

export default ForumGrid;