import React from 'react'
import {Travel,Ecomm,Hotel,Retail,Restaurant,Startup} from '../images/Vector1'
import { useNavigate } from 'react-router-dom';

const Yourindustry = () => {
  const navigate = useNavigate();

const industry=[

{
   line1:<Travel/>,
   title1:'Travel',
   description1:'Take off with our working capital loans for travel agents',
   routelink1:'/travage'
},
{
  line1:<Ecomm/>,
  title1:'E-Commerce',
  description1:'Loan that let you stock more and sell more',
  routelink1:'/ecome'
},

{
  line1:<Hotel/>,
  title1:'Hotels',
  description1:'Make room for growth with our loans for renovation',
  routelink1:'/hotel'
},







  {
    line1:<Retail/>,
    title1:'Retail',
    description1:'Got an appetile for growth? We serve loans to match',
    routelink1:'/retail'
 },
 {
   line1:<Restaurant/>,
   title1:'Restaurants',
   description1:'Get a loan to enhance your store and improve your sales',
   routelink1:'/resta'
 },
 
 {
   line1:<Startup/>,
   title1:'Startup',
   description1:'Revenue-based financing for Start-ups without equity dilution',
   routelink1:'/start'
 },
 





]



  return (
    
    <>
   
    

    <h1 id='font' className=' text-center fw-bold' style={{marginTop:'150px'}}>FIND YOUR INDUSTRY. FUND YOUR GROWTH.</h1>

<div id='font' className='  teva-fil  container '>

      
    {industry.map((diamond,ferit)=>{
      

      return (
      <div   className='row  '   key={(ferit)}>
       
       <div className='col   '>
        
                  <div onClick={()=>navigate(diamond.routelink1)} className='shadow-lg circle-travel ' >
                      <p className='text-center icon' >{diamond.line1}</p>
                      <p className="card-text fw-bold text-center"  style={{color:'#FDB827'}} >{diamond.title1}</p>
                     
                  </div>   
                  <p className='circle-dis fw-medium'> {diamond.description1} </p>
                  {/* style={{borderRadius:'100px',width: '10rem',height:'10rem',padding:'30px',backgroundColor:'#5920C5'}} */}
      
      </div>
      </div>

    );
    
    
       } ) }
       
</div>



{/* <div className=' container ms-5 mt-5 row  '>
{growth.map((silver,fgirt)=>{

return (
<div className='col ' key={(fgirt)}>

        <div onClick={()=>navigate(silver.routelink1)} className='shadow-lg ' style={{borderRadius:'100px',width: '10rem',height:'10rem',padding:'30px',backgroundColor:'#5920C5'}}>
              <p className='text-center'>{silver.line2}</p>
              <p className="card-text fw-bold text-center" style={{color:'#FDB827'}}>{silver.title2}</p>

             
        </div>
        <div className='mt-4'>{silver.description2} </div>
</div>



);


 } ) }
      </div> */}
     
    </>
    
  );
}

export default Yourindustry