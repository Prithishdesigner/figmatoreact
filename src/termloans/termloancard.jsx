import React from 'react'
import {Cash1, Cash2, Cash3, Cash4 } from '../images/Vector1';

const Termloancard = () => {

  const loantype = [


    {
      money:<Cash1/>,
      // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
      title: 'Upto 15 Crores',
      action: 'Get loan upto 1 Crores depending upon the need',
    
    
    },
    
    
    {
        money:<Cash2/>,
        title: 'Upto 1.5% Per Month',
        action: 'Get amazingly low interest rate starting from 1.5% per month',
      
      
      },
    
    
      {
        money:<Cash3/>,
        title: '2% Fees',
        action: 'We only charge 2% processing fee',
      
      
      },
    
    
      {
        money:<Cash4/>,
        title: '84 Months',
        action: 'Get a loan with a tenure of upto 84 months',
      
      
      },
    
    
    
    ]




  return (
    <div id='font'>

     
    <div className='container d-flex loan-card text-center ' style={{marginTop:'-70px'}}>
   {loantype.map((detail,index)=>{

    return(
    
        <div className="card loan-card-items  shadow  p-3 border-0" style={{ borderRadius:'30px'}} key={(index)}>
         
            
            {/* <img src={detail.money}  /> */}
            <p> {detail.money}</p>
            <p className="card-text fw-semibold  fs-4">{detail.title}</p>
            <p >{detail.action}</p>
         

         
        </div>
        
        );
        
      })}
 

 </div>
 

 <p className='container mt-5 mb-5'>For businesses, one of the most important aspects is to be able to acquire funds at reasonable rates whenever required. This requirement can come up for various purposes. The business might need to invest in physical capital or might require it for proper and efficient working capital management. Or it might even need funds to repay previously taken debt. One of the most common ways for any small or large business to acquire funds is by the way of taking up a term loan from any financial institution like FinMSME.</p>
 </div>
  )
}

export default Termloancard