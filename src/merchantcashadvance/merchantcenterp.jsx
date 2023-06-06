import React from 'react'
import  Poc1 from '../images/newfolder/Group 29.png';
import Poc2  from '../images/newfolder/Group 30.png';

const Merchantcenterp = () => {
  return (
   <>
    <div id='font'>
    
                  <div className='text-center' style={{marginTop:'120px'}}>
                  <h1 className='mb-4'>How To Get Merchant Advance Loan Against POS Machine</h1>
                  <p>MSMEs that meet the following criteria are eligible for ‘Merchant Advance Loans’</p>
                  </div>
 <div   className=' container'>
      <div className="row total">
          <div className='col ' >
                  <div  className='siting-text'>
                        
                              <h3 className='fw-bold'>Eligibility For Loan Against POS Machine</h3>
                              <ul className='fw-semibold lh-lg '>
                                    <li>Minimum 6 months card swipe history</li>
                                    <li>Minimum monthly transaction of INR 50,000</li>
                                    <li>Minimum 1 years of operational history</li>
                                    <li>Promoter age 22 and above</li>
                                    <li>1 years ITR</li>
                              
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
                        <div className='col ' >
                              <div className='siting-text2' >
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
           
       
        </div>




       
   
   
   
   
   
   </div>
   </>
  )
}

export default Merchantcenterp