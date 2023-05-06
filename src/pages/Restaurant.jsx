import React from 'react'
import Navbar from '../landingpage/Navbar'
import Blogandstories from '../landingpage/blogandstories'
import Faq from '../landingpage/faq'
import Footer from '../landingpage/footer'
import Restaurantbanner from '../restaurant/Restaurantbanner'
import Restaurantcard from '../restaurant/Restaurantcard'
import Restaurantcencard from '../restaurant/Restaurantcencard'
import Restaurantcen2 from '../restaurant/Restaurantcen2'
import Restauranttex from '../restaurant/Restauranttex'

const Restaurant = () => {
  return (
    <>
    <Navbar/>
    <Restaurantbanner/>
    <Restaurantcard/>
    <Restauranttex/>
    <Restaurantcen2/>
    <Restaurantcencard/>
    
    <Blogandstories/>
    <Faq/>
    <Footer/>
    
    </>
  )
}

export default Restaurant