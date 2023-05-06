import React from 'react'
import Aditya from '../images/ourpartners/MicrosoftTeams-image (7).png'
import Finance from '../images/ourpartners/amazon-anchor-logo.png'
// import Idfc from '../images/ourpartners/dtdc.jpg'
// import Iifl from '../images/ourpartners/fiserv.jpg'
import Incred from '../images/ourpartners/flipkart-logo.png'
import Ugro from '../images/ourpartners/pinelabs.png'
import Riviera from '../images/ourpartners/swiggy.png'

const Enableloan1 = () => {
  return (
    <>
    <div id='font' >

            <h2 className='fw-bold text-center ' style={{marginTop:'100px',marginBottom:''}}>Enabling Loans through our Industry Partners</h2>
            <div className='container text-center shadow p-3 bg-body-tertiary rounded' style={{marginTop:'100px',marginBottom:'100px'}} >

            <div className='row'>
                <div className='col '>
                    <img src={Aditya} alt="" className='m-4' style={{height:'60px'}}/>
                    <img src={Incred} alt="" className='m-4' style={{height:'50px'}} />
                    <img src={Riviera} alt=""  className='m-4' style={{height:'120px'}}/>
                   
                </div>
            </div>
                <div className='col'>
                <img src={Finance} alt="" className='m-4' style={{height:'60px'}}/>
                    <img src={Ugro} alt="" className='m-4' style={{height:'80px'}}/>
                    {/* <img src={Idfc} alt="" className='m-3' style={{height:'100px'}}/> */}
                    {/* <img src={Iifl} alt="" className='m-3' style={{height:'60px',width:'180px'}}/> */}
                    

                </div>
            </div>


    </div>

    </>
  )
}

export default Enableloan1