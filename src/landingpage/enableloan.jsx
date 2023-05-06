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
            <div className='container text-center mb-5 shadow p-3 mb-5 bg-body-tertiary rounded' >
              
                <div className='row'>
                  <div className='col'>
                    <img src={Aditya} alt="" className='m-3' style={{height:'100px'}}/>
                    <img src={Incred} alt="" className='m-3' style={{height:'120px',width:'200px'}} />
                    <img src={Riviera} alt="" className='m-3'  style={{height:'40px',width:'120px'}}/>
                    <img src={Finance} alt="" className='m-3' style={{height:'200px',width:'250px'}}/>
                    </div>
                    </div>
              <div className=' col '>
                    
                    <img src={Ugro} alt="" className='m-4' style={{height:'80px',width:'150px'}}/>
                    <img src={Idfc} alt="" className='m-4' style={{height:'70px',width:'150px'}}/>
                    <img src={Iifl} alt="" className='m-4' style={{height:'70px',width:'150px'}}/>
                    

                </div>
           
           </div>

    </div>

    </>
  )
}

export default Enableloan