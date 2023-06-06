import React from 'react'
import {Sales ,Productrange , Compaign ,Docread ,Cart} from '../images/Vector1';


const Eecommcard = () => {

    
    const loantype = [


        {
          money:<Sales/>,
          // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
          title: ' Stock more for Online Sales',
          
        
        
        
        },
        
        
        {
            money:<Productrange/>,
           title: ' Expand Product  Range',
           
           
          
          
          },
        
        
          {
            money:<Cart/>,
            title: 'Meet Seasonal Demands',
           
        
          
          
          },
        
        
          {
            money:<Compaign/>,
            title: ' Marketing & Advertising',
            
         
          
          
          
          },

          {
            money:<Docread/>,
            title: ' Purchase Inventory Management System',
           
          
          
          
          },
        
        
        
        ]
  return (
    <div id='font'>
            
           
             
        <div className='container d-flex loan-card text-center' style={{marginTop:'-70px',marginBottom:'80px'}}>
       {loantype.map((detail,index)=>{
    
        return(
        
            <div  className="card loan-card-items   shadow  p-3 border-0" style={{borderRadius:'30px'}} key={(index)}>
             
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

export default Eecommcard