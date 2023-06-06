import React from 'react'
import { Vector1, Vector2, Vector3, Vector4 } from '../images/Vector1';
import { useNavigate } from 'react-router-dom';

const Retailscencard = () => {

    const navigate = useNavigate();

    const loantype = [
    
    
    {
      money:<Vector1/>,
      // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
      title: 'Term Loan',
      descrip:'Lumpsum capital to expand and grow',
      action: 'Read More',
      routeLink:'/term'
    
    
    },
    
    
    {
        money:<Vector2/>,
        title: 'Line of Credits',
        descrip:'Credit limit to manage cash flows',
        action: 'Read More',
        routeLink:'/Line'
      
      
      },
    
    
      {
        money:<Vector3/>,
        title: 'Invoice Discounting',
        descrip:'Capital from Invoices unlocked to be reused in your business',
        action: 'Read More',
        routeLink:'/invoice'
      
      
      },
    
    
      {
        money:<Vector4/>,
        title: 'Merchant Cash Advance',
        descrip:'Easy to manage loans based on POS machine swipes',
        action: 'Read More',
        routeLink:'/merchant'
      
      
      },
    
    
    
    ]
    
  return (
    <div id='font'>
    <div className='container d-flex loan-card text-center ' style={{marginTop:'70px',marginBottom:'100px'}}>
   {loantype.map((detail,index)=>{

    return(
    
        <div  className="card loan-card-items   shadow  p-3 border-0" style={{width: '16rem', borderRadius:'30px'}} key={(index)}>
         
            <div className="card-body">
            {/* <img src={detail.money}  /> */}
            <div className=''>{detail.money}</div>
            <p className="card-text fw-semibold">{detail.title}</p>
            <p>{detail.descrip}</p>
            <a href="#" onClick={()=>navigate(detail.routeLink)} className="btn btn-dark fw-semibold" style={{ borderRadius:'30px'}}>{detail.action}</a>
            </div>
         
        </div>
        );
      })}
 

 </div>
 </div>
  )
}

export default Retailscencard