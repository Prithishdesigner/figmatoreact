import React from 'react'
import Aditya from '../images/financingpartners/aditya-birla-logo.jpg'
import Finance from '../images/financingpartners/chola.png'
import Idfc from '../images/financingpartners/IDFCFirst.png'
import Iifl from '../images/financingpartners/iifl.png'
import Incred from '../images/financingpartners/icici.png'
import Ugro from '../images/financingpartners/hdfc.png'
import Riviera from '../images/financingpartners/tmb.png'

const Enableloan = () => {
  return (
    <>
    <div id='font' >

            <h2 className='fw-bold text-center ' style={{marginTop:'150px',marginBottom:'100px'}}>Enabling Loans through our Financing Partners</h2>
            <div className='container text-center shadow p-3  bg-body-tertiary rounded' >
              
                <div className='row'>
                      <div className='col'>
                        <img src={Aditya} alt="" className='m-3' style={{height:'100px'}}/>
                        <img src={Incred} alt="" className='m-3' style={{height:'120px'}} />
                        <img src={Riviera} alt="" className='m-3'  style={{height:'40px'}}/>
                        <img src={Finance} alt="" className='m-3' style={{height:'200px'}}/>
                      </div>
                    
                      <div className=' col '>
                          
                          <img src={Ugro} alt="" className='m-4' style={{height:'80px'}}/>
                          <img src={Iifl} alt="" className='m-4' style={{height:'70px'}}/>
                          <img src={Idfc} alt="" className='m-4' style={{height:'70px'}}/>
                          

                      </div>
                </div>
           </div>

    </div>

    </>
  )
}

export default Enableloan