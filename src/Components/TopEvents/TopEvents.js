import React from 'react'
import './TopEvents.css'

function TopEvents() {
  return (
    <div id='top-destinations'>
        <div id='top-destination-text'>Top Destinations for Events</div>

        <div id='flexbox'>
            <div id='box1'>
                <div className='image-container-1'>
                    <span className='img-text'>New York</span>
                </div>
                <div id='blue'>
                    <div id='boxcircle1'>01</div>
                </div>
            </div>

            <div id='box2'>
            <div className='image-container-2'>
                <span className='img-text'>Mumbai</span>
                </div>
                <div id='purple'>
                    <div id='boxcircle2'>02</div>
                </div>
            </div>

            <div id='box3'>
            <div className='image-container-3'>
            <span className='img-text'>Chicago</span>
                </div>
                <div id='orange'>
                    <div id='boxcircle3'>03</div>
                </div>
            </div>

            <div id='box4'>
            <div className='image-container-4'>
            <span className='img-text'>Dubai</span>
                </div>
                <div id='green'>
                    <div id='boxcircle4'>04</div>
                </div>
            </div>

            <div id='box5'>
            <div className='image-container-5'>
            <span className='img-text'>London</span>
                </div>
                <div id='mustard'>
                    <div id='boxcircle5'>05</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TopEvents