import React from 'react'
import './resultgrid.css'

const ResultGrid = ({ searchResult }) => {
  return (
    <div 
    className = 'grid'
    onClick={() => window.open(searchResult["recipe"]["url"])}
    >
    <img className='grid-img' src={searchResult["recipe"]["image"]}/>
    <p className='grid-label'>{searchResult["recipe"]["label"]}</p> 
    </div>
  )
}

export default ResultGrid