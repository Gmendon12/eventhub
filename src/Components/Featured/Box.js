import React from 'react'
import './Featured.css'

function Box({img,head, followers}) {
  return (
    <div id='feature-box'>
        <div id='feature-box-img'>
        <img src={img} alt="" height="80px" width='80px' />
        <div id='feature-box-head'>{head}</div>
        <div id='feature-box-followers'>
            <span class="material-symbols-outlined">groups</span>
            <span style={{fontSize:'13px', fontStyle:'italic'}}>{followers} Followers</span>
        </div>
        </div>

        <button id='follow-btn'>Follow</button>
    </div>
  )
}

export default Box