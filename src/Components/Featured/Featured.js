import React from 'react'
import './Featured.css'
import Box from './Box'

function Featured() {
  return (
    <div id='featured-publishers'>
      <div id='featured-heading'>Featured Publishers</div>
         <div id='container'>
      <div id='featured'>
        <Box
        img="review1.png"
        head='Earth AI'
        followers="100"
        />
        <Box
        img="review2.png"
        head='James Albert'
        followers="560"
        />
        <Box
        img="review1.png"
        head='Education Consulting'
        followers='890'
        />
        <Box
        img="review2.png"
        head='Education Consulting'
        followers='890'
        />
        <Box
        img="review1.png"
        head='Education Consulting'
        followers='890'
        />
        <Box
        img="review2.png"
        head='Education'
        followers='890'
        />
         <Box
         img="review1.png"
        head='Sports'
        followers='890'
        />
         <Box
         img="review2.png"
        head='Education Consulting'
        followers='890'
        />
         <Box
         img="review2.png"
        head='Education Consulting'
        followers='890'
        />
         <Box
         img="review2.png"
        head='Education Consulting'
        followers='890'
        />
         <Box
        img="review2.png"
        head='James Albert'
        followers="560"
        />
    </div>
    </div>
    </div>
 
  
  )
}

export default Featured