import React from 'react'
import {Refurbishment ,Renovation , Newrestaurant ,Newbusiness ,Securityequipments} from '../images/Vector1';


const Hotelcard = () => {
   
    const loantype = [


        {
          money:<Refurbishment/>,
          // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
          title: ' Stock more for Online Sales',
          
        
        
        
        },
        
        
        {
            money:<Renovation/>,
           title: ' Expand Product  Range',
           
           
          
          
          },
        
        
          {
            money:<Newrestaurant/>,
            title: 'Meet Seasonal Demands',
           
        
          
          
          },
        
        
          {
            money:<Newbusiness/>,
            title: ' Marketing & Advertising',
            
         
          
          
          
          },

          {
            money:<Securityequipments/>,
            title: ' Purchase Inventory Management System',
           
          
          
          
          },
        
        
        
        ]
  return (
    <div id='font'>
            
            <div class="container text-center">
             
        <div className='row d-flex ms-1' style={{marginTop:'-70px', marginBottom:'100px'}}>
       {loantype.map((detail,index)=>{
    
        return(
        
            <div  className="card d-flex ms-4  shadow p-2 border-0" style={{width: '12rem', borderRadius:'30px'}} key={(index)}>
             
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
                
     </div>
  )
}

export default Hotelcard