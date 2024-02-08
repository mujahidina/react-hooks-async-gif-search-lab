import React from "react";

function GifList({gifs}){
    return(
        <ul>
        {gifs.map((gif, index) => (
          <li key={index}>
            <img src={gif.images.original.url} alt={`gif-${index}`} />
          </li>
        ))}
      </ul>
    );
}

export default GifList;