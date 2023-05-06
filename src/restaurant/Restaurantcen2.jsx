import React from 'react'
import { Poc1,Poc2 } from '../images/Vector1';

const Restaurantcen2 = () => {
  return (
    <>
    <div id='font'>
 
   
   <div  className='d-flex container'>
              <div className='container' style={{marginTop:'120px',marginLeft:'100px'}}>
                    <h3 className='fw-bold'>Restaurant Loan Eligibility</h3>
                    <ul className='fw-semibold lh-lg'>
                       <li>Minimum operational history of 1 years</li>
                       <li>Promoter age 22 and above</li>
                       <li>Anchor Vintage of 6 months</li>
                       <li>Anchor monthly payout of 15k</li>
                   
                    </ul>
              
              </div>
            <div style={{marginTop:'40px'}}><Poc1 /></div>
       
        </div>



        <div  className='d-flex container mb-5 mt-5'>
        <div className='ms-3' ><Poc2 /></div>
              <div className='container' style={{marginTop:'120px',marginLeft:'100px'}}>
                    <h3 className='fw-bold'>Restaurant Loan Required Documents</h3>
                    <ul className='fw-semibold lh-lg'>
                      <li>KYC documents of the entity & promoters</li>
                      <li>Bank statement for the last 6 months</li>
                      <li>1 years ITR for 10 lacs</li>
                   
                    </ul>
              
              </div>
           
       
        </div>




       
   
   
   
   
   </div>
   </>
  )
}

export default Restaurantcen2