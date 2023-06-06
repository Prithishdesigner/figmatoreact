import React from 'react'
import {Cash1, Mmon, Mmon1, Mmon2, Mmon3 } from '../images/Vector1';

const Indugrotravelcard = () => {


    const loantype = [


        {
          money:<Cash1/>,
          // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
          title: 'Working Capital',
          
        
        
        
        },
        
        
        {
            money:<Mmon2/>,
           title: ' Online Booking Facility',
           
           
          
          
          },
        
        
          {
            money:<Mmon1/>,
            title: 'Credit to Corporate Clients',
           
        
          
          
          },
        
        
          {
            money:<Mmon/>,
            title: ' Monthly Salary to Employees',
            
         
          
          
          
          },

          {
            money:<Mmon3/>,
            title: 'Bulk Bookings',
           
          
          
          
          },
        
        
        
        ]
  return (
    
        <div id='font'>
            
          
             
        <div className='container d-flex loan-card text-center' style={{marginTop:'-70px', marginBottom:'100px'}}>
       {loantype.map((detail,index)=>{
    
        return(
        
            <div  className="card loan-card-items   shadow  p-3 border-0 " style={{ borderRadius:'30px'}} key={(index)}>
             
                <div className="card-body ">
                {/* <img src={detail.money}  /> */}
                <div className='mb-3 '>{detail.money}</div>
                <p className="card-text fw-semibold fs-6">{detail.title}</p>
                
                </div>
             
            </div>
            
            );
          })}
     
    
     </div>
    
                
     </div>
  )
}

export default Indugrotravelcard