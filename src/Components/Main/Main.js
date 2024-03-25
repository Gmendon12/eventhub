import React from 'react'
import './Main.css'

function Main({img,heading, date, cost, publisher, followers, onLike, onUnlike, isLiked}) {
  return (
    <div>
        <div id='event'>
            <div id='events-img-content'>
            <img src={img} alt="" id='events-img' />
            <div id='like-download-icons'>
            <div className='favorite'>
            <span class="material-symbols-outlined">
              {isLiked ? "favorite" : "favorite_border"}
            </span>
            </div>
            <div className='favorite'>
            <span class="material-symbols-outlined">download</span>
            </div>
            </div>
            
            </div>
            <div style={{paddingLeft:'10px', paddingBottom:'20px', display:'flex', flexDirection:'column', gap:'3px'}}>
            <div id='events-heading'>{heading}</div>
            <div id='events-date'>{date}</div>
            <div id='events-cost'>from <span style={{fontWeight:'550', fontSize:'16px'}}> ${cost}</span></div>
            <div id='events-publisher'>{publisher}</div>
            {
                followers && (
                    <div id='events-followers'> 
                    <span class="material-symbols-outlined">groups</span> <span style={{fontStyle:'italic', fontSize:'12px', paddingLeft:'5px'}}>{followers} followers</span></div> 
                )
            }  
            </div>
        </div>
    </div>
  )
}

export default Main