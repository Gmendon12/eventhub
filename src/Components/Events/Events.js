import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './Events.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Main from '../Main/Main';

function CustomTabPanel(props) {
  const{children, value, index, ...other} = props
  
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>  
          </Box>
        )}
      </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index){
  return{
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}




function Events() {

  //--------------tabs-------------
  const[value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  //-------------Collapsible-----------

  const[expand, setExpand] = useState()

  const handleClick = () => {
   setExpand((prevExpanded) => !prevExpanded);
   };

   //-------------------------------------------------------------------------
 const[likedItmes, setLikedItems] = useState([])

 const handleLike = (item) =>{
  setLikedItems([...likedItmes, item])
 }

 const handleUnlike = (item) =>[
  setLikedItems(likedItmes.filter((likedItem) => likedItem !== item))
 ]
     
  return (
    <div id='events'>
        <hr />
        <div id='browsing-events-items'>
            <div id='browsing-events'>Browsing events in</div>
            <div id='location-icon'>
            <span class="material-symbols-outlined arrow-down">keyboard_arrow_down</span>
            <span id='location-text'>Mumbai</span>
            </div>
        </div>
        <hr />

    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        variant='scrollable'
        scrollButtons='auto'
      >
        <Tab label="All" {...allyProps(0)} sx={{ fontSize: '11px'}} />
        <Tab label="For you" {...allyProps(1)} sx={{ fontSize: '11px' }} />
        <Tab label="Today" {...allyProps(2)} sx={{ fontSize: '11px' }} />
        <Tab label="This weekend" {...allyProps(3)} sx={{ fontSize: '11px' }} />
        <Tab label="St Patrik's Day" {...allyProps(4)} sx={{ fontSize: '11px' }} />
        <Tab label="Womens History Month" {...allyProps(5)} sx={{ fontSize: '11px' }} />
        <Tab label="Holi" {...allyProps(6)} sx={{ fontSize: '11px' }} />
        <Tab label="Music" {...allyProps(7)} sx={{ fontSize: '11px' }} />
        <Tab label="Food & Drinks" {...allyProps(8)} sx={{ fontSize: '11px' }} />
        <Tab label="Charity" {...allyProps(9)} sx={{ fontSize: '11px' }} />
      </Tabs>
    </Box>

    <CustomTabPanel value={value} index={0}>
    <div id='events-container'>
          <Main
          img='concert.jpg' 
          heading = "Concerts Coming Soon"
          date = "Thu, March 28"
          cost = "15.00"
          publisher = "James Anderson"
          followers='14'
          onLike={()=> handleLike('Concerts Coming Soon')}
          onUnlike={()=> handleUnlike('Concerts Coming Soon')}
          isLiked={likedItmes.includes('Concerts Coming Soon')}
          />
            <Main
          img = 'students.jpg'   
          heading = "Students"
          date = "Sun, April 28"
          cost = "6.99"
          publisher = "Mumbai, India"
          />
            <Main
          img = 'music.jpg'   
          heading = "African Tale Music"
          date = "Wed, May 28"
          cost = "27.80"
          publisher = "African National Theatre"
          />
            <Main 
            img='youth.jpg'
          heading = "Youth Empowerment"
          date = "Tue, Oct 15"
          cost = "10.00"
          publisher = "Justin Williams"
          followers='44'
          />
            <Main 
          img = "african_wildlife.jpg"  
          heading = "African Wildlife"
          date = "Fri, Feb 14"
          cost = "3999"
          publisher = "Uganda Wildlife Authority"
          />
            <Main
          img = 'jump.jpg'   
          heading = "Benefits of Excercise"
          date = "Thu, March 21"
          cost = "99.00"
          publisher = "Sports Acedemy"
          followers='566'
          />
              <Main
          img = 'whoweare.webp'   
          heading = "Successful Career"
          date = "Sat, 22 Feb"
          cost = "49.00"
          publisher = "Indian Education Academy"
          followers='266'
          />
              <Main
          img = 'soul.jpg'   
          heading = "Healing the Soul"
          date = "Thu, March 28"
          cost = "33.00"
          publisher = "Daniel Monroe"
          followers='194'
          />
        </div>
        <hr />
        <div id='collapse'>
          <div className="expand-button" onClick={handleClick}>
              {expand ? (
              <div className='show-more'>
                <KeyboardArrowUpIcon sx={{fontSize:25}} />
                <span style={{fontSize:'12px'}}>Show Less</span>
              </div>
              ) : (
                <div className='show-more'>
                    <KeyboardArrowDownIcon sx={{fontSize:25}} />
                    <span style={{fontSize:'12px'}}>Show More</span>
                </div>
              ) }
          </div>
          <div className={`expand-content ${expand ? 'expanded' : ''}`}>
              <Main
                  img="african_wildlife.jpg"
                  heading="African Wildlife"
                  date="Fri, Feb 14"
                  cost="3999"
                  publisher="Uganda Wildlife Authority"
              />
               <Main
                  img="african_wildlife.jpg"
                  heading="African Wildlife"
                  date="Fri, Feb 14"
                  cost="3999"
                  publisher="Uganda Wildlife Authority"
              />
               <Main
                  img="african_wildlife.jpg"
                  heading="African Wildlife"
                  date="Fri, Feb 14"
                  cost="3999"
                  publisher="Uganda Wildlife Authority"
              />
               <Main
                  img="african_wildlife.jpg"
                  heading="African Wildlife"
                  date="Fri, Feb 14"
                  cost="3999"
                  publisher="Uganda Wildlife Authority"
              />
          </div>
      </div>
    </CustomTabPanel>

    <CustomTabPanel value={value} index={1}>
      {likedItmes.map((item, index) =>{
        <Main key={index} heading={item} />
      })}
    </CustomTabPanel>

       
    </div>
  )
}

export default Events