import React from 'react'
import {Build,Calender,Cash2, Clock} from '../images/Vector1';

const Startupcard = () => {

    const loantype = [


        {
          money:<Build/>,
          // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
          title: ' COMPANY TYPE',
          descrip:'If you are in the line of Software, SaaS, Tech Services, Digital Media or similar business'
          
        
        
        
        },
        
        
        {
            money:<Calender/>,
           title: '  BUSINESS VINTAGE',
           descrip:'Your business needs to be in operation for more than 2 years'
           
           
          
          
          },
        
        
          {
            money:<Cash2/>,
            title: 'REVENUE',
            descrip:'Average revenue more than INR 15 lacs or $20,000 for the last 6 months'
           
        
          
          
          },
        
        
          {
            money:<Clock/>,
            title: ' CLIENT BASE',
            descrip:'Need to have more than 10 clients at the time of applying'
            
         
          
          
          
          },

      
        
        
        
        ]
  return (
    <div id='font'>
    <div className='container d-flex loan-card text-center' style={{marginTop:'-70px',marginBottom:'80px'}}>
   {loantype.map((detail,index)=>{

    return(
    
        <div  className="card loan-card-items   shadow  p-3 border-0" style={{borderRadius:'30px'}} key={(index)}>
         
            <div className="card-body">
            {/* <img src={detail.money}  /> */}
            <div className='mb-3'>{detail.money}</div>
            <p className="card-text fw-semibold">{detail.title}</p>
            <p>{detail.descrip}</p>
            
            </div>
         
        </div>
        );
      })}
 

 </div>
 </div>
  )
}

export default Startupcard