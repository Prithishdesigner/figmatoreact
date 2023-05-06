import React from 'react'
import Navbar from '../landingpage/Navbar'
import Blogandstories from '../landingpage/blogandstories'
import Footer from '../landingpage/footer'
import Invoicebanner from '../invoicediscounting/invoicebanner'
import Invoicecard from '../invoicediscounting/invoicecard'
import Aboutinvoice from '../invoicediscounting/aboutinvoice'
import Faq from '../landingpage/faq'

const InvoiceDiscounting = () => {
  return (
    <>
    <Navbar/>
    <Invoicebanner/>
    <Invoicecard/>
    <Aboutinvoice/>


    <Faq/>
    <Blogandstories/>
    

<Footer/>
</>
  )
}

export default InvoiceDiscounting