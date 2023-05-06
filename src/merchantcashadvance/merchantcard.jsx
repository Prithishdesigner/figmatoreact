import React from 'react'
import {Cash1, Cash2, Balance, Approval, Cash4 } from '../images/Vector1';

const Merchantcard = () => {


    const loantype = [


        {
          money:<Cash1/>,
          // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
          title: 'Upto 1 Crores',
          action: 'Get loan upto 1 Crores depending upon the need',
        
        
        
        },
        
        
        {
            money:<Cash2/>,
            title: '1.5% Per Month',
            action: 'Get amazingly low interest rate starting from 1.5% per month',
           
          
          
          },
        
        
          {
            money:<Approval/>,
            title: 'Daily Deductions',
            action: 'Flexible repayment through daily deductions',
        
          
          
          },
        
        
          {
            money:<Balance/>,
            title: '  12 Months',
            action: 'Get a loan with a tenure of upto 12 months',
          
          
          
          },

          {
            money:<Cash4/>,
            title: '2% Fees',
            action: 'We only charge 2% processing fee',
          
          
          
          },
        
        
        
        ]
  
    return (
        <div id='font'>
            <div class="container text-center">
        <div className='row d-flex ms-1' style={{marginTop:'-70px'}}>
       {loantype.map((detail,index)=>{
    
        return(
        
            <div  className="card d-flex ms-4  shadow p-2 border-0" style={{width: '12rem', borderRadius:'30px'}} key={(index)}>
             
                <div className="card-body ">
                {/* <img src={detail.money}  /> */}
                <div className='mb-3 '>{detail.money}</div>
                <p className="card-text fw-semibold fs-4">{detail.title}</p>
                <p >{detail.action}</p>
                </div>
             
            </div>
            );
          })}
     
    
     </div>
     </div>
     </div>
  )
}

export default Merchantcard