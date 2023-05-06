import React from 'react'
import Navbar from '../landingpage/Navbar'
import Blogandstories from '../landingpage/blogandstories'
import Faq from '../landingpage/faq'
import Footer from '../landingpage/footer'
import Merchantbanner from '../merchantcashadvance/merchantbanner'
import Merchantcard from '../merchantcashadvance/merchantcard'
import Merchantcenterp from '../merchantcashadvance/merchantcenterp'
import Merchantdetail from '../merchantcashadvance/merchantdetail'

const MechantCashAdvance = () => {
  return (
    <>
    <Navbar/>
    <Merchantbanner/>
    <Merchantcard/>
    <Merchantcenterp/>    
    <Merchantdetail/>    
    <Blogandstories/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default MechantCashAdvance