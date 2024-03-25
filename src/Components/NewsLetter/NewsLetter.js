import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div id='newsletter'>
        <div id='newsletter-head'>Get Our Newsletter</div>
        <p id='newsletter-para'>Subscribe to receive update, access to exclusive deals & more</p>
        <input type="text" id='newsletter-input' />
        <button id='newsletter-btn'>Subscribe</button>
    </div>
  )
}

export default NewsLetter