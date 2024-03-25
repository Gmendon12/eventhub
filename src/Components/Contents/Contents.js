import React from 'react'
import './Contents.css'

function Contents() {
  return (
    <div id='contents-flex'>
        <div className='content-flex'>
        <div className='content-circle'>
        <span class="material-symbols-outlined">music_note</span>
        </div>
        <div className='contents-text'>Music</div>
        </div>

        <div className='content-flex'>
        <div className='content-circle'>
        <span class="material-symbols-outlined">nightlife</span>
        </div>
        <div className='contents-text'>Nightlife</div>
        </div>

        <div className='content-flex'>
        <div className='content-circle'>
        <span class="material-symbols-outlined">face_3</span>
        </div>
        <div className='contents-text'>Visual Arts</div>
        </div>

        <div className='content-flex'>
        <div className='content-circle'>
        <span class="material-symbols-outlined">houseboat</span>
        </div>
        <div className='contents-text'>Holidays</div>
        </div>

        <div className='content-flex'>
        <div className='content-circle'>
        <span class="material-symbols-outlined">health_and_safety</span>
        </div>
        <div className='contents-text'>Health</div>
        </div>

        <div className='content-flex'>
        <div className='content-circle'>
        <span class="material-symbols-outlined">stadia_controller </span>
        </div>
        <div className='contents-text'>Hobbies</div>
        </div>

        <div className='content-flex'>
        <div className='content-circle'>
        <span class="material-symbols-outlined">payments</span>
        </div>
        <div className='contents-text'>Business</div>
        </div>

        <div className='content-flex'>
        <div className='content-circle'>
        <span class="material-symbols-outlined">restaurant</span>
        </div>
        <div className='contents-text'>Food & Drinks</div>
        </div>

    </div>
  )
}

export default Contents