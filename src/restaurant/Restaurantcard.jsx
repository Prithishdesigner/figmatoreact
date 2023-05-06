import React from 'react'
import {Cart,Cash1, Compaign, Productrange} from '../images/Vector1';

const Restaurantcard = () => {


    const loantype = [


        {
          money:<Cart/>,
          // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
          title: 'Setting up of new Outlet',
          
        
        
        
        },
        
        
        {
            money:<Productrange/>,
           title: ' Investing in Base Kitchen',
           
           
          
          
          },
        
        
          {
            money:<Compaign/>,
            title: 'Investing in Local/ Digital Marketing Building  ',
           
        
          
          
          },
        
        
          {
            money:<Cash1/>,
            title: '  Building Working Capital',
            
         
          
          
          
          },

      
        
        
        
        ]
  return (
    <div id='font'>
    <div className='container grid text-center d-flex justify-content-between' style={{marginTop:'-70px',marginBottom:'80px'}}>
   {loantype.map((detail,index)=>{

    return(
    
        <div  className="card d-flex col-3 shadow p-2 border-0" style={{width: '16rem', borderRadius:'30px'}} key={(index)}>
         
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

export default Restaurantcard