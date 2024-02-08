import  React, { useState, useEffect } from "react";
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer(){
const [gifs, setGifs] = useState([])
const [query, setQuery] = useState("")

// Fetch the giphies from the API.
    useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=xXMrh9iZzzWNPITvlBNbn8at3M3eutL7&rating=g`)
    .then((res) => res.json())
    .then((gifs) => {
         setGifs(gifs.data.slice(0, 3))
    })
    }, [query])


    // handle the submit
    function handleSubmit(e, newQuery){
       e.preventDefault();
       setQuery(newQuery);
       setGifs([])
    }


    return(
       <div className="gif-list-container">

        <GifSearch handleSubmit={handleSubmit}/>
        <GifList gifs={gifs}/>

       </div>
    );
}

export default GifListContainer;
