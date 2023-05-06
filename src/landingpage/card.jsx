import React from 'react'
import { Vector1, Vector2, Vector3, Vector4 } from '../images/Vector1';
import { useNavigate } from 'react-router-dom';


const Card = () => {
  const navigate = useNavigate();

const loantype = [


{
  money:<Vector1/>,
  // money:`data:image/svg+xml;utf8,${encodeURIComponent(<Vector1/>)}`,
  title: 'Term Loan',
  
  action: 'Read More',
  routeLink:'/term'


},


{
    money:<Vector2/>,
    title: 'Line of Credits',
 
    action: 'Read More',
    routeLink:'/Line'
  
  
  },


  {
    money:<Vector3/>,
    title: 'Invoice Discounting',
  
    action: 'Read More',
    routeLink:'/invoice'
  
  
  },


  {
    money:<Vector4/>,
    title: 'Merchant Cash Advance',
   
    action: 'Read More',
    routeLink:'/merchant'
  
  
  },



]




  return (
    <div id='font'>
    <div className='container grid text-center d-flex justify-content-between' style={{marginTop:'-70px'}}>
   {loantype.map((detail,index)=>{

    return(
    
        <div  className="card d-flex col-3 shadow p-3 border-0" style={{width: '16rem', borderRadius:'30px'}} key={(index)}>
         
            <div className="card-body">
            {/* <img src={detail.money}  /> */}
            <div className=''>{detail.money}</div>
            <p className="card-text fw-semibold">{detail.title}</p>
          
            <a href="#" onClick={()=>navigate(detail.routeLink)} className="btn btn-dark fw-semibold" style={{ borderRadius:'30px'}}>{detail.action}</a>
            </div>
         
        </div>
        );
      })}
 

 </div>
 </div>
  );
}

export default Card