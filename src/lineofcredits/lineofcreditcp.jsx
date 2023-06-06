import React from 'react'
import  Criteriaa  from '../images/newfolder/Group 40.png';

const Lineofcreditcp = () => {
  return (
    <>
    <div id='font' className=' container'>
        <div  className='row total'>
           <div className='col ' >
                    <div className='siting-text' >
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
                    </div>

                      <div className='col loan-elig '>
                           <img src={Criteriaa} alt="" className='siting-img  ' />
                      </div>
           
        </div>
    </div>
    </>
  )
}

export default Lineofcreditcp