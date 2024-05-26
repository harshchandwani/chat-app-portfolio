import React from 'react'
import Header from './Header'
import Highlight from './Hightlight'
import VideoComponent from './VideoComponent'
import SecondaryHeading from './SecondaryHeading'
import Security from './Security'
import Developer from './Developer'
import Footer from './Footer'

const MainPage = () => {
  return (
    <div>
        <Header sticky="top" />
        <Highlight />
        <VideoComponent />
        <SecondaryHeading />
        <Security />
        <Developer />
        <Footer />
    </div>
  )
}

export default MainPage