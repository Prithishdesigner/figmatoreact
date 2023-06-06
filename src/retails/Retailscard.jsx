import React from 'react'
import {Cart,Schemes,Customers, Compaign} from '../images/Vector1';


const Retailscard = () => {

    const loantype = [


        {
          money:<Cart/>,
          // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
          title: '  Meet Seasonal Demands',
          
        
        
        
        },
        
        
        {
            money:<Schemes/>,
           title: '  Avail Offers/Schemes',
           
           
          
          
          },
        
        
          {
            money:<Customers/>,
            title: 'Credit to   Customers',
           
        
          
          
          },
        
        
          {
            money:<Compaign/>,
            title: ' Marketing & Advertising',
            
         
          
          
          
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

export default Retailscard