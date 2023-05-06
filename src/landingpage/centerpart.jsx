import React from 'react';
import { Group28 } from '../images/Vector1';

const Centerpart = () => {
  return (
    <div id='font'>
        <div  className='d-flex container'>
              <div className='container' style={{marginTop:'180px'}}>
                    <h3 className='fw-bold'>Business Loan Eligibility</h3>
                    <ul className='fw-semibold'>
                        <li>Minimum operational history of 1 years</li>
                        <li>Promoter age 22 and above</li>
                    </ul>
                    <h3 className='fw-bold'> Required Business Loan Documents</h3>
                    <ul className='fw-semibold'>
                        <li>KYC documents of the entity & promoters</li>
                        <li>Bank statement for the last 6 months</li>
                        <li>1 years ITR for 10 lacs</li>
                    </ul>
              
              </div>
            <div style={{marginTop:'50px'}}><Group28 /></div>
       
        </div>
    </div>
  )
}

export default Centerpart