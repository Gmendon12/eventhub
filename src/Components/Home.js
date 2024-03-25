import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Contents from './Contents/Contents'
import Events from './Events/Events'
import OtherEvents from './OtherEvents/OtherEvents'
import TopEvents from './TopEvents/TopEvents'
import Featured from './Featured/Featured'
import NewsLetter from './NewsLetter/NewsLetter'

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Contents/>
      <Events/>
      <OtherEvents/>
      <TopEvents />
      <Featured/>
      <NewsLetter/>
      <Footer />

    </div>
  )
}

export default Home