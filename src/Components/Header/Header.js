import React from 'react'
import './Header.css'
import { useEffect } from 'react'
import TagCloud from 'TagCloud'

function Header() {

  useEffect(()=>{
    return()=>{
      const container = '.tagcloud';
      const texts = [
        "Music",
        "Education",
        "Debates",
        "Travelling",
        "Arts",
        "Nighlife",
        "Holidays",
        "Space",
        "Concerts",
        "Sports",
        "Charity",
        "Business",
        "Health",
        "Food & Drinks"
      ];

      const options = {
        radius: 150,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true
      };

      TagCloud(container, texts, options)
    }
  },[])

  return (
    <div id='header-container'>
      <div id='header'>
        <div className='text-shpere'>
          <span className='tagcloud'></span>
        </div>
        <div className='header-content'>
        <div id='header-img-text'>You have Got Plans</div>
        <button id='header-button'>Find your next event</button>
        </div>
    </div>
    </div>
  )
}

export default Header