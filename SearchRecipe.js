import React from 'react'
import './searchrecipe.css'
import Axios from 'axios'
import { useState } from "react"
import ResultGrid from '../resultgrid/ResultGrid'


const SearchRecipe = () => {

  const [query, setquery] = useState("");
  const [searchResults, setsearchResults] = useState([]);

  const YOUR_APP_ID = `ef445b0f`;
  const YOUR_APP_KEY = '0e21dde1eb606586fad50532f2704c01';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setsearchResults(result.data.hits);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getRecipeInfo();
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div className = 'container'>
        <input
          className = 'textbox'
          type="text"
          value={query}
          onChange={(event) => setquery(event.target.value)}
        />
        </div>
        <div className = 'submit-container'>
        <button type="submit" className = 'submit-btn'>Submit</button>
        </div>
      </form>

      <div className='result_box'>
        {
          searchResults !== [] &&
          searchResults.map((searchResult) => {
            return <ResultGrid searchResult={searchResult} />;
          })
        }
      </div>

    </div>
  )
}

export default SearchRecipe