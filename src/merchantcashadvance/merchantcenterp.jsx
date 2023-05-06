import React from 'react'
import { Poc1,Poc2 } from '../images/Vector1';

const Merchantcenterp = () => {
  return (
   <>
    <div id='font'>
   <div className='text-center' style={{marginTop:'120px'}}>
   <h1 className='mb-4'>How To Get Merchant Advance Loan Against POS Machine</h1>
   <p>MSMEs that meet the following criteria are eligible for ‘Merchant Advance Loans’</p>
   </div>
   
   <div  className='d-flex container'>
              <div className='container' style={{marginTop:'180px'}}>
                    <h3 className='fw-bold'>Eligibility For Loan Against POS Machine</h3>
                    <ul className='fw-semibold lh-lg'>
                        <li>Minimum 6 months card swipe history</li>
                        <li>Minimum monthly transaction of INR 50,000</li>
                        <li>Minimum 1 years of operational history</li>
                        <li>Promoter age 22 and above</li>
                        <li>1 years ITR for loans above 10 lacs</li>
                   
                    </ul>
              
              </div>
            <div style={{marginTop:'100px'}}><Poc1 /></div>
       
        </div>



        <div  className='d-flex container mb-5 mt-5'>
        <div className='ms-3' style={{marginTop:'80px'}}><Poc2 /></div>
              <div className='container' style={{marginTop:'180px',marginLeft:'100px'}}>
                    <h3 className='fw-bold'>Required Documents For Loan Against POS Machine</h3>
                    <ul className='fw-semibold lh-lg'>
                        <li>Business Registration Proof</li>
                        <li>KYC documents of the applicant and the organisation</li>
                        <li>Bank statement for the last 6 months</li>
                        <li>Pan Card of the promoter</li>
                        <li>Aadhaar Card of the promoter</li>
                   
                    </ul>
              
              </div>
           
       
        </div>




       
   
   
   
   
   </div>
   </>
  )
}

export default Merchantcenterp