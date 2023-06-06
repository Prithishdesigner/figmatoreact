import React from 'react'
import  Poc1 from '../images/newfolder/Group 29.png';
import Poc2  from '../images/newfolder/Group 30.png';

const Retailscenter2 = () => {
  return (
    <>
    <div id='font'>
 
   
   <div  className=' container'>
   <div className="row total">
            <div className='col ' >
              <div className='siting-text'>
                    <h3 className='fw-bold'>Shop Loan Eligibility</h3>
                    <ul className='fw-semibold lh-lg'>
                       <li>Minimum operational history of 1 years</li>
                       <li>Promoter age 22 and above</li>
                       <li>Anchor Vintage of 6 months</li>
                       <li>Anchor monthly payout of 10k</li>
                   
                    </ul>
              
              </div>
              </div>
                    <div  className='col  '>
                              <img src={Poc1} alt="" className='siting-img  ' />
                        </div>
                       
       
        </div>
        </div>


        <div  className=' container '>
        <div className="row total2">
        
                      <div  className='col  '>
                              <img src={Poc2} alt="" className='siting-img2  ' />
                        </div>
              <div className='col' >
              <div className='siting-text2' >
                    <h3 className='fw-bold'>Shop Loan Required Documents</h3>
                    <ul className='fw-semibold lh-lg'>
                      <li>KYC documents of the entity & promoters</li>
                      <li>Bank statement for the last 6 months</li>
                      <li>1 years ITR for 10 lacs</li>
                   
                    </ul>
              
              </div>
              </div>
           
       
        
        </div>
        </div>




       
   
   
   
   
   </div>
   </>
  )
}

export default Retailscenter2