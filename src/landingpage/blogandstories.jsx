import React from 'react'
import immge1 from "../images/newfolder/images1.png"
import immge2 from "../images/newfolder/images2.png"
import immge3 from "../images/newfolder/images3.png"



const Blogandstories = () => {


const blostor = [

{
busine:immge1,
newgovt:'What is NBFC and different NBFCs in India?',
date:'Apr 25,2023 | BY FinMSME',
des:'These days, there is a growing buzz around NBFCs. Knowing what is an NBFC and its purpose will help you understand the basic idea of these financial institutions. Continue reading to dig deeper into the concept of the NBFC. You will also learn more about its history and scope, and the different types of NBFCs. What is […]',
next:'READ MORE'



},


{
    busine:immge2,
    newgovt:'What is the Difference Between Demand Loan and Term Loan?',
    date:'Apr 25,2023 | BY FinMSME',
    des:'When it comes to borrowing money from financial institutions, businesses, and individuals have a variety of options to choose from. Two of the most common types of loans are demand loans and term loans. While both serve the same purpose of providing funds to borrowers, there are significant […]',
    next:'READ MORE'
    
    
    
 },


 {
        busine:immge3,
        newgovt:'Step-by-Step Guide to Udyam Registration Certificate Online',
        date:'Apr 05,2023 | BY FinMSME',
        des:'Udyam Registration Certificate is a government-issued document that recognizes and certifies an enterprise as a micro, small, or medium enterprise. The certificate contains information such as the enterprise’s name, address, Udyam Registration Number, and date of issue. This certificate serves as proof of  […]',
        next:'READ MORE'
        
        
        
  },


]



  return (
<>
<div id='font'>
<div className='container d-flex'>
    <div className='row'>

    <h1 className='fw-bold text-center mt-5'>Blog & Stories</h1>
{blostor.map((jutire,idury)=>{

  

    return(
    
    <div className="p-3 text-white   container" style={{width: '20rem',backgroundColor:'#5920C5',borderRadius:'30px',marginTop:'100px',marginBottom:'100px'}} key={(idury)}>
            <img src={jutire.busine} className="card-img-top mt-2 mb-4" style={{borderRadius:'30px'}} alt="..."/>
            <div className="card-body ">
              <h5 className="card-title mb-2">{jutire.newgovt}</h5>
              <p style={{color:'#FDB827'}}>{jutire.date}</p>
              <p className="card-text shadow p-3">{jutire.des}</p>
              <div className='text-center m-2'>
              <a href="#" className="btn btn-success">{jutire.next}</a>
              </div>
            </div>

    </div>

);
}) }
</div>
</div>
</div>
</>
  );
}

export default Blogandstories