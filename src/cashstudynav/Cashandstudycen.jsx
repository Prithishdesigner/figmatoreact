import React from 'react'
import study1 from '../images/cashstudy/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg'
import study2 from '../images/cashstudy/alex-shutin-XsC0GHXi-8k-unsplash.jpg'
import study3 from '../images/cashstudy/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg'
import study4 from '../images/cashstudy/dylan-gillis-KdeqA3aTnBY-unsplash.jpg'
import study5 from '../images/cashstudy/jason-goodman-vbxyFxlgpjM-unsplash.jpg'
import study6 from '../images/cashstudy/microsoft-365-bWL-c09Ys80-unsplash.jpg'
import study7 from '../images/cashstudy/microsoft-edge-6CNB3iD8M4E-unsplash.jpg'
import study8 from '../images/cashstudy/pedro-lastra-Nyvq2juw4_o-unsplash.jpg'

const Cashandstudycen = () => {

    const cashstudy1=[

        {
           line1:study1,
           title1:'HGR Logistics',
           description1:'When COVID-19, the most recent black swan event witnessed by the world, made its appearance, India and many other countries had to implement lockdowns to contain the viral outspread. But it wasn’t enough to stop...',
           updatetime1:'A RISING PROBLEM IN THE INDUSTRY',
           action:'https://medium.com/@finmsme1'
        
        },
        {
          line1:study2,
          title1:'Monocept',
          description1:'Back in 2014, EY reported that top Indian firms could have had made Rs. 5.3 trillion in cash in the fiscal year of 2013, had they managed their working capital cycle effectively. ',
          updatetime1:'A RISING PROBLEM IN THE INDUSTRY',
          action:'https://medium.com/@finmsme1'
         
        },
        
      
        
        ]
        
        
        const cashstudy2=[
        
          {
            line2:study3,
            title2:'Gayatri Enterprises',
            description2:'According to industry statistics, the restaurant business in India is valued at 75,000 crores and the organized sector is growing at a healthy annual rate of 16%.',
            updatetime2:'WORKING CAPITAL CHALLENGES',
            action:'https://medium.com/@finmsme1'
           
         },
         {
           line2:study4,
           title2:'Universal Sportsbiz Private Limited',
           description2:'A major problem faced by SME suppliers pertains to the locking up of their working capital for weeks in a row. There are instances of suppliers having to wait in excess ...',
           updatetime2:'WORKING CAPITAL CHALLENGES',
           action:'https://medium.com/@finmsme1'
           
         },
     
        
        
        
        
        
        ]


        const cashstudy3=[
        
            {
              line3:study5,
              title3:'Biryani Blues',
              description3:'The food services industry in India is expected to reach 5 lakh crore by the year 2021, led by a healthy 16% growth rate in the organised sector. High percentage of young and working...',
              updatetime3:'WORKING CAPITAL AND BUSINESS EXPANSION CHALLENGES',
              action:'https://medium.com/@finmsme1'
             
           },
           {
             line3:study6,
             title3:'Kobster',
             description3:'With end-consumer demands and expectations at an all time high today, it has become imperative for businesses to accelerate and optimize their internal operations. Unfortunately, various factors ..',
             updatetime3:'WORKING CAPITAL & CREDIT FLOW CHALLENGES',
             action:'https://medium.com/@finmsme1'
             
           },
       
          
          
          
          
          
          ]
          const cashstudy4=[
        
            {
              line4:study7,
              title4:'Vega Air Travels',
              description4:'The travel, tourism, and hospitality industry is the largest service industry in India, contributing a significant 6.23% to the country’s GDP and emerging as one of its biggest growth drivers among the services sector. But this is al ...',
              updatetime4:'WORKING CAPITAL & CREDIT FLOW CHALLENGES',
              action:'https://medium.com/@finmsme1'
             
           },
           {
             line4:study8,
             title4:'Pizza On My Plate',
             description4:'With the country’s food delivery market alone being worth USD 15 billion today, the industry sees massive potential in the concept of ‘cloud kitchens’ that only have delivery facility, with no dine-ins and (rare) takeaways...',
             updatetime4:'BUSINESS EXPANSION CHALLENGES',
             action:'https://medium.com/@finmsme1'
             
           },
       
          
          
          
          
          
          ]
        







  return (
    <>
    <div id='font'>
    

    <h1 className=' text-center fw-bold mb-5' style={{marginTop:'120px'}}>FIND YOUR INDUSTRY. FUND YOUR GROWTH.</h1>

<div className=' container '>
<div className="row">
    {cashstudy1.map((diamond,ferit)=>{
      

      return (
      <div   className='col '   key={(ferit)}>
       
            
       <div className="card mb-3" style={{maxWidth: '800px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={diamond.line1} className="img-fluid rounded-start" style={{height:'300px'}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{diamond.title1}</h5>
        <p className="card-text">{diamond.description1}</p>
        <p className="card-text"><small className="text-body-secondary">{diamond.updatetime1}</small></p>
        <a href={diamond.action} className="btn btn-success">Read More</a>
      </div>
    </div>
  </div>
</div>
   
                  
          
      </div>

    );
    
    
       } ) }
        </div> 
</div>


<div className=' container '>
<div className="row">
    {cashstudy2.map((silver,ferit)=>{
      

      return (
      <div   className='col '   key={(ferit)}>
       
            
       <div className="card mb-3" style={{maxWidth: '800px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={silver.line2} className="img-fluid rounded-start" style={{height:'300px'}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{silver.title2}</h5>
        <p className="card-text">{silver.description2}</p>
        <p class="card-text"><small className="text-body-secondary">{silver.updatetime2}</small></p>
        <a href={silver.action} className="btn btn-success">Read More</a>
      </div>
    </div>
  </div>
</div>
   
                  
          
      </div>

    );
    
    
       } ) }
        </div> 
</div>



<div className=' container '>
<div className="row">
    {cashstudy3.map((gold,ferit)=>{
      

      return (
      <div   className='col'   key={(ferit)}>
       
            
       <div className="card mb-3" style={{maxWidth: '800px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={gold.line3} className="img-fluid rounded-start" style={{height:'300px'}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{gold.title3}</h5>
        <p className="card-text">{gold.description3}</p>
        <p className="card-text"><small className="text-body-secondary">{gold.updatetime3}</small></p>
        <a href={gold.action} className="btn btn-success">Read More</a>
      </div>
    </div>
  </div>
</div>
   
                  
          
      </div>

    );
    
    
       } ) }
        </div> 
</div>


<div className=' container '>
<div className="row">
    {cashstudy4.map((bronze,ferit)=>{
      

      return (
      <div   className='col '   key={(ferit)}>
       
            
       <div className="card mb-3" style={{maxWidth: '800px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={bronze.line4} className="img-fluid rounded-start" style={{height:'300px'}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{bronze.title4}</h5>
        <p className="card-text">{bronze.description4}</p>
        <p className="card-text"><small className="text-body-secondary">{bronze.updatetime4}</small></p>
        <a href={bronze.action} className="btn btn-success">Read More</a>
      </div>
    </div>
  </div>
</div>
   
                  
          
      </div>

    );
    
    
       } ) }
        </div> 
</div>

      </div>
    </>
  )
}

export default Cashandstudycen