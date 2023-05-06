import React from 'react'
import Navbar from '../landingpage/Navbar'
import Faq from '../landingpage/faq'
import Blogandstories from '../landingpage/blogandstories'
import Footer from '../landingpage/footer'
import Ecombanner from '../ecommerce/Ecombanner'
import Eecommcard from '../ecommerce/Eecommcard'
import Ecommcenter from '../ecommerce/Ecommcenter'
import Ecomcencard from '../ecommerce/Ecomcencard'




const Ecommerce = () => {
  return (
    <>
    <Navbar/>
    <Ecombanner/>
    <Eecommcard />
    <Ecommcenter />
    <Ecomcencard />
    
    
    



    <Faq/>
   
   <Blogandstories/>
   <Footer/>
    </>
  )
}

export default Ecommerce