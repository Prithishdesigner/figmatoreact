import React from 'react'
import { Criteria } from '../images/Vector1';

const Lineofcreditcp = () => {
  return (
    <div id='font'>
        <div  className='d-flex container'>
    <div className='container' style={{marginTop:'180px'}}>
        <h3 className='fw-bold'>Eligibility For Line Of Credit</h3>
        <ul className='fw-semibold'>
            <li>Minimum operational history of 1 years</li>
            <li>Promoter age 22 and above</li>
        </ul>
        <h3 className='fw-bold'> Required Business Loan Documents</h3>
        <ul className='fw-semibold'>
            <li>KYC documents of the entity & promoters</li>
            <li>Bank statement for the last 6 months</li>
            <li>1 years ITR </li>
        </ul>
        
        </div>
        <div style={{marginTop:'100px'}}><Criteria /></div>
       
        </div>
    </div>
  )
}

export default Lineofcreditcp