import React, {useState} from "react";

function GifSearch({ handleSubmit}){
  
    const [input, setInput] = useState("")

    function handleInput(e){
        setInput(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        handleSubmit(e, input);
      }

    return(
      <div>

   <form onSubmit={handleFormSubmit}>
    <label>Enter a search term:</label> <br></br>
    <input name="query" type="text" placeholder="search for a GIF" onChange={handleInput} value={input} />
    <button type="submit">Find Gifs</button>
   </form>

      </div>
    );
}

export default GifSearch;