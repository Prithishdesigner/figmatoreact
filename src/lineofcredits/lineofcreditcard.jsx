import React from 'react'
import {Cash1, Cash2, Balance, Approval, Cash3 } from '../images/Vector1';

const Lineofcreditcard = () => {

    const loantype = [


        {
          money:<Cash1/>,
          // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
          title: 'Upto 5 Crores',
          action: 'Get loan upto 5 Crores depending upon the need',
        
        
        
        },
        
        
        {
            money:<Cash2/>,
            title: '1.5% Per Month',
            action: 'Get amazingly low interest rate starting from 1.5% per month',
           
          
          
          },
        
        
          {
            money:<Approval/>,
            title: 'One Approval',
            action: 'One time approval for usage upto 12 months',
        
          
          
          },
        
        
          {
            money:<Balance/>,
            title: '  Always Balanced',
            action: 'Pay for as much as you use',
          
          
          
          },

          {
            money:<Cash3/>,
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
          );
        }

export default Lineofcreditcard