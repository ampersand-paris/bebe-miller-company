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
    // const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/forums?filters[featured][$not]=true&[populate]=*&pagination[pageSize]=10`)
    const [index, setIndex] = useState(1)
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/forums?pagination[page]=${index}&pagination[pageSize]=6&[populate]=*`)
    const [first, setFirst] = useState(0)
    const [middle, setMiddle] = useState(1)
    const [last, setLast] = useState(2)

    let forums = [];
    let pagination = [];
    let start = 1;
    let end = null;
    let current = start + 1;

    const options = {
        month: "long",
        day: "numeric",
      };

    if (data) {

        pagination = data.meta.pagination
        forums = data.data
        
        console.log(data)

        function findStartAndEnd() {
            end = pagination.pageCount;
        }

        function increasePagination() {
            setFirst(first + 1)
            setMiddle(middle + 1)
            setLast(last + 1)
            setIndex(index + 1)
            // document.getElementsByClassName("pagination-selected")[0].classList.remove("pagination-selected")
            // document.getElementById(index).classList.add("pagination-selected")
        }

        function decreasePagination() {
            setFirst(first - 1)
            setMiddle(middle - 1)
            setLast(last - 1)
            setIndex(index - 1)
            // document.getElementsByClassName("pagination-selected")[0].classList.remove("pagination-selected")
            // document.getElementById(index).classList.add("pagination-selected")
        }

        function setPagination(id) {
            setFirst(id - 1)
            setMiddle(id)
            setLast(id + 1)
            setIndex(id)
        }

        function setFirstBox(id) {
            setFirst(0)
            setMiddle(1)
            setLast(2)
            setIndex(1)
            // document.getElementsByClassName("pagination-selected")[0].classList.remove("pagination-selected")
            // document.getElementById(id).classList.add("pagination-selected")
        }

        function setLastBox() {
            setFirst(pagination.pageCount - 1)
            setMiddle(pagination.pageCount)
            setLast(pagination.pageCount + 1)
            setIndex(pagination.pageCount)
            // document.getElementsByClassName("pagination-selected")[0].classList.remove("pagination-selected")
            // document.getElementById(pagination.pageCount).classList.add("pagination-selected")
        }


        findStartAndEnd()

        console.log(`index`, index, pagination.total % 6)

        return (
     
            <>
                <div className="forum-container">
                    {forums.map((forum) =>
                        <div className="forum-card" style={{backgroundImage: `url(${forum.attributes.Header_Image.data.attributes.url})`}}>
                            <div className="forum-title">
                                <h1>{forum.attributes.Forum_Title}</h1>
                                <a href={`/chronicle/${forum.attributes.slug}`}><h5>Read more</h5></a>
                            </div>
                        </div>
                    )}  
                    { index === pagination.pageCount && pagination.total % 6 > 0 ? ( 
                        <div className="forum-card-message">
                            <h2>Stay tuned for more.</h2>    
                        </div>  ) : (null) }           
                </div>    
                <div className="pagination">
                    { index === 1 ? ( <h3 className="invisible">&#60;</h3> ) : ( 
                        <h3 className="pagination-bttn" onClick={() => setFirstBox(1)}>&#60; &#60;</h3>
                    )}
                    { index === 1 ? ( <h3 className="invisible">&#60;</h3> ) : ( 
                        <h3 className="pagination-bttn" onClick={() => decreasePagination()}>&#60;</h3>
                    )}
                        { first === 0 ? ( null ) : ( 
                        <h3 className="pagination-page" 
                            onClick={() => setPagination( first )} 
                            id={ index }>{ first }</h3>
                        )}
                        { pagination.pageCount < 3 ? ( null ) : ( 
                            <h3 className="pagination-page pagination-selected"  
                            id={ index + 1 }>{ middle }</h3>
                        )}
                        { last > pagination.pageCount ? ( null ) : ( 
                        <h3 className="pagination-page" 
                            onClick={() => setPagination( last )}
                            id={ index + 2 }>{ last }</h3>
                        )}
                    { index === pagination.pageCount ? ( <h3 className="invisible">&#62;</h3> ) : ( 
                        <h3 className="pagination-bttn" onClick={() => increasePagination()}>&#62;</h3>
                    )}
                    { index === pagination.pageCount ? ( <h3 className="invisible">&#62;</h3> ) : ( 
                        <h3 className="pagination-bttn" onClick={() => setLastBox(pagination.pageCount)}> &#62; &#62;</h3>
                    )}
                </div>
            </>       
        )
    }
    
}

export default ForumGrid;