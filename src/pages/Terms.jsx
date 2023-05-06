import React from 'react'
import Navbar from '../../src/landingpage/Navbar'

import Blogandstories from '../../src/landingpage/blogandstories'
import Faq from '../../src/landingpage/faq'

import Footer from '../../src/landingpage/footer'
import Termloanbanner from '../termloans/termloanbanner'
import Termloancard from '../termloans/termloancard'
import Termloancenterpart from '../termloans/termloancenterpart'

const Terms = () => {
  return (
    <>
      <Navbar />
      <Termloanbanner />
      <Termloancard />
      <Termloancenterpart />


      <Blogandstories />
      <Faq />

      <Footer />
    </>
  )
}

export default Terms