// React Dependendecies
import React from "react";

// Components
import useFetch from "../useFetch";
import ForumGrid from "../components/ForumGrid";


const Forum = (props) => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/forum-page?populate[Forum_Page][populate]=*&populate[featuredForums][populate]=*`)

    let forums = [];

    let i = 0;

    const options = {
        month: "long",
        day: "numeric",
      };


    if (data) {

        forums = data.data.attributes.featuredForums.data
        
        return (
            <div className="page-container">
                <div className="forum-recent-container">
                    <div className="forum-recent-card">
                        <img src={`${forums[0].attributes.Header_Image.data.attributes.url}`}/>
                        <div className="publication-info">
                            <p>Published {new Date(forums[0].attributes.publishedAt).toLocaleString("en-US", options)}</p>
                        </div>
                        <div className="forum-recent-title">
                            <h1>{forums[0].attributes.Forum_Title}</h1>
                            <p>{forums[0].attributes.Forum_Description}</p>
                            <a href={`/forum/${forums[0].id}`}><h5>Read more</h5></a>      
                        </div>             
                    </div>
                    <div className="forum-recent-card">
                        <img src={`${forums[1].attributes.Header_Image.data.attributes.url}`}/>
                        <div className="publication-info">
                            <p>Published {new Date(forums[1].attributes.publishedAt).toLocaleString("en-US", options)}</p>
                        </div>
                        <div className="forum-recent-title">
                            <h1>{forums[1].attributes.Forum_Title}</h1>
                            <p>{forums[1].attributes.Forum_Description}</p>
                            <a href={`/forum/${forums[1].id}`}><h5>Read more</h5></a>      
                        </div>             
                    </div>
                </div>
                <ForumGrid />
            </div>                  
        )
    }
    
}

export default Forum;