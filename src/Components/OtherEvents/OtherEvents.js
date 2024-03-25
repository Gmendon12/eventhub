import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import './OtherEvents.css'

function OtherEvents() {

  const [slideIndex, setSlideIndex] = useState(0);

const handleSlideChange = (index) => {
  setSlideIndex(index);
};

const handleNextSlide = () => {
  const nextIndex = slideIndex + 1;
  setSlideIndex(nextIndex >= totalSlides ? 0 : nextIndex);
};

const handlePrevSlide = () => {
  const prevIndex = slideIndex - 1;
  setSlideIndex(prevIndex < 0 ? totalSlides - 1 : prevIndex);
};

const totalSlides = 4

  return (
    <div id='carousel-container'>
      <div id='other-events'>Other Events</div>
          <div className='carousel'>
            <div onClick={handlePrevSlide} className='prev-button'><span class="material-symbols-outlined">navigate_before</span></div>
            <div onClick={handleNextSlide} className='next-button'><span class="material-symbols-outlined">navigate_next</span></div>

            <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            selectedItem={slideIndex}
            onChange={handleSlideChange}
            transitionTime={400}
            showArrows={false}
            showIndicators={true}
            id="corousel-box"
            >
                <div className='contents-carousel-1'>
                    <div className='carousel-head'>Womens History Month 2024</div>
                </div>
                <div className='contents-carousel-2'>
                    <div className='carousel-head'>How to Build a Successful Business</div>
                </div>
                <div className='contents-carousel-3'>
                    <div className='carousel-head'>Womens History Month 2024</div>
                </div>
                <div className='contents-carousel-4'>
                    <div className='carousel-head'>Womens History Month 2024</div>
                </div>
            </Carousel>
      </div> 
    </div>

  )
}

export default OtherEvents