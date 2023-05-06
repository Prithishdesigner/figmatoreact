import React from 'react'
import Navbar from '../landingpage/Navbar'
import Blogandstories from '../landingpage/blogandstories'
import Faq from '../landingpage/faq'
import Footer from '../landingpage/footer'
import Partnersbanner from '../partnernav/Partnersbanner'

function Navebarspartn() {
  return (
    <>
    <Navbar/>
    <Partnersbanner/>
    
    <Blogandstories/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Navebarspartn