import React from 'react'
import Navbar from '../landingpage/Navbar'

import Footer from '../landingpage/footer'
import IndugroTravel from '../industryandgrowth/IndugroTravel'
import Indugrotravelcard from '../industryandgrowth/Indugrotravelcard'
import Indugrotravelnex from '../industryandgrowth/Indugrotravelnex'
import Faq from '../landingpage/faq'
import Blogandstories from '../landingpage/blogandstories'
import Indugrotravelcen from '../industryandgrowth/Indugrotravelcen'

const Travelagent = () => {
  return (
    <>
    <Navbar/>
    <IndugroTravel/>
    
    <Indugrotravelcard/>
    <Indugrotravelcen/>
    <Indugrotravelnex/>
    <Faq/>
   
    <Blogandstories/>
    <Footer/>
    </>
  )
}

export default Travelagent