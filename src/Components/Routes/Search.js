import React from 'react'
import './Search.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Search() {

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

const totalSlides = 3

  return (
    <div>
      <div id='back-home'>
      <span class="material-symbols-outlined back">arrow_back</span>
      <Link to='/' style={{color:'black', fontSize:'16px'}}>Home</Link>
      </div>
         <div id='search-tab'>
        <div id='search-tab-contents-1'>
           <div id='search-contents'>
            <div id='search-contents-icon'>
            <span class="material-symbols-outlined" id='search-icon' >search</span>
              <input type="text" id='search-input' placeholder='Search for anything'/>
            </div>
              <span class="material-symbols-outlined" id='right-arrow'>arrow_forward</span>
           </div>

           <div id='search-location-flex'>
           <span class="material-symbols-outlined" id='location-icon'>location_on</span>
           <span id='location'>Mumbai</span>
           </div>

           <div id='search-grid'>
            <a className='search-grid-links'>Online</a>
            <a className='search-grid-links'>Today</a>
            <a className='search-grid-links'>This weekend</a>
            <a className='search-grid-links'>Free</a>
            <a className='search-grid-links'>Music</a>
            <a className='search-grid-links'>Food & Drink</a>
           </div>

           <div id='search-popular-searches'>
            <div id='search-popular-searches-text'>Recent and popular searches</div>
              <div id='search-popular-searches-links'>
                <div className='search-popular-searches-link'>
                <span class="material-symbols-outlined">trending_up</span>
                <span>fully funded international conferences for 2024</span>
                </div>

                <div className='search-popular-searches-link'>
                <span class="material-symbols-outlined">trending_up</span>
                <span>conference in Canada</span>
                </div>

                <div className='search-popular-searches-link'>
                <span class="material-symbols-outlined">trending_up</span>
                <span>trending conferences in the US</span>
                </div>
              </div>
           </div>

        </div>


        <div id='search-contents-2'>
          <div id='search-contents-2-head'>
          <h3 id='search-contents-2-heading'>Our favorite online event collections</h3>
          <div style={{display:'flex', flexDirection:'row', gap:'5px'}}>
              <div onClick={handlePrevSlide} className='navigating-button'>
              <span class="material-symbols-outlined nav">navigate_before</span>
              </div>
              <div onClick={handleNextSlide} className='navigating-button'>
              <span class="material-symbols-outlined nav">navigate_next</span>
              </div>
          </div>
          </div>

            <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            selectedItem={slideIndex}
            onChange={handleSlideChange}
            transitionTime={400}
            >
                <div className='search-contents-carousel'>
                    <img src="whoweare.webp" alt="" className='search-contents-img' />
                    <div className='search-contents-carousel-head'>Womens History Month 2024; Events that celebrate & empower women</div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'5px', paddingTop:'10px'}}>
                      <div className='logo'> <span className='e'>e</span> </div>
                      <span classname='eventbrite'>EventHub</span>
                    </div>
                    <div className='upcoming-events'>
                      <div className='upcoming-events-text'>20 upcoming events</div>
                      <p className='upcoming-events-para'>In honor of Women's History Month in March - and international Womens Day on March 8 - we've curated events in selected US cities that empower and lift up women by giving them tools to advance their careers</p>
                    </div>
                </div>

                <div className='search-contents-carousel'>
                    <img src="students.jpg" alt="" className='search-contents-img' />
                    <div className='search-contents-carousel-head'>Womens History Month 2024; Events that celebrate & empower women</div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'5px', paddingTop:'10px'}}>
                      <div className='logo'> <span className='e'>e</span> </div>
                      <span classname='eventbrite'>EventHub</span>
                    </div>
                    <div className='upcoming-events'>
                      <div className='upcoming-events-text'>20 upcoming events</div>
                      <p className='upcoming-events-para'>In honor of Women's History Month in March - and international Womens Day on March 8 - we've curated events in selected US cities that empower and lift up women by giving them tools to advance their careers</p>
                    </div>
                </div>
                <div className='search-contents-carousel'>
                    <img src="workout.jpg" alt="" className='search-contents-img' />
                    <div className='search-contents-carousel-head'>Womens History Month 2024; Events that celebrate & empower women</div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'5px', paddingTop:'10px'}}>
                      <div className='logo'> <span className='e'>e</span> </div>
                      <span classname='eventbrite'>EventHub</span>
                    </div>
                    <div className='upcoming-events'>
                      <div className='upcoming-events-text'>20 upcoming events</div>
                      <p className='upcoming-events-para'>In honor of Women's History Month in March - and international Womens Day on March 8 - we've curated events in selected US cities that empower and lift up women by giving them tools to advance their careers</p>
                    </div>
                </div>
            </Carousel>

        </div>
       
    </div>
    </div>
  )
}

export default Search