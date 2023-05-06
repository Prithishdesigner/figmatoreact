import React from 'react'
import {Cash1, Cash2, Cash3, } from '../images/Vector1';

const Invoicecard = () => {



    const loantype = [


        {
          money:<Cash1/>,
          // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
          title: 'Upto 1 Crores',
          action: 'Get an invoice discounting line up to INR 1 cr.',
        
        
        },
        
        
        {
            money:<Cash2/>,
            title: 'Upto 90%*',
            action: 'Upto 90%* of invoice value paid upfront',
          
          
          },
        
        
          {
            money:<Cash3/>,
            title: 'Easy Repayment',
            action: 'Repay only when the buyer pays',
          
          
          },
        
        
       
        
        
        ]
    
  return (
    <div id='font'>
    <div className='container grid text-center d-flex justify-content-between' style={{marginTop:'-70px'}}>
   {loantype.map((detail,index)=>{

    return(
    
        <div className="card d-flex col-3 shadow  border-0" style={{width: '20rem', borderRadius:'30px'}} key={(index)}>
         
            <div className="card-body">
            {/* <img src={detail.money}  /> */}
            <div className='mb-3'>{detail.money}</div>
            <p className="card-text fw-semibold  fs-4">{detail.title}</p>
            <p >{detail.action}</p>
            </div>

         
        </div>
        
        );
        
      })}
 
 </div>
 </div>
  )
}

export default Invoicecard