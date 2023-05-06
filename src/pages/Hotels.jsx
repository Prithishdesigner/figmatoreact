import React from 'react'
import Navbar from '../landingpage/Navbar'
import Blogandstories from '../landingpage/blogandstories'
import Faq from '../landingpage/faq'
import Footer from '../landingpage/footer'
import Hotelbanner from '../hotels/Hotelbanner'
import Hotelcard from '../hotels/Hotelcard'
import Hotelcencard from '../hotels/Hotelcencard'
import Hotelcenter from '../hotels/Hotelcenter'

const Hotels = () => {
  return (
    <>
    <Navbar/>
    <Hotelbanner/>
    <Hotelcard/>
    <Hotelcenter/>
    <Hotelcencard/>







    <Blogandstories/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Hotels