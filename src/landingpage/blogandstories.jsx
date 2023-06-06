import React from 'react'
import immge1 from "../images/newfolder/images1.png"
import immge2 from "../images/newfolder/images2.png"
import immge3 from "../images/newfolder/images3.png"



const Blogandstories = () => {


const blostor = [

{
busine:immge1,
newgovt:'How to Choose the Right Loan for Your Business',
date:'Apr 05,2022 | BY FinMSME',
des:'These days, there is a growing buzz around NBFCs. Knowing what is an NBFC and its purpose will help you understand the basic idea of these financial institutions. Continue reading to dig deeper into the concept of the NBFC. You will also learn more about its history and scope, and the different types of NBFCs. What is […]',
next:'https://medium.com/@finmsme1/how-to-choose-the-right-loan-for-your-business-402da2efa1a0'



},


{
    busine:immge2,
    newgovt:'The Unexpected Visitor',
    date:'Mar 25,2023 | BY FinMSME',
    des:'When it comes to borrowing money from financial institutions, businesses, and individuals have a variety of options to choose from. Two of the most common types of loans are demand loans and term loans. While both serve the same purpose of providing funds to borrowers, there are significant differences between the two. In this blog […]',
    next:'https://medium.com/@finmsme1/the-unexpected-visitor-1ac820955e52'
    
    
    
 },


 {
        busine:immge3,
        newgovt:'Everything You Need to Know About Personal Loans',
        date:'Oct 05,2022 | BY FinMSME',
        des:'Udyam Registration Certificate is a government-issued document that recognizes and certifies an enterprise as a micro, small, or medium enterprise. The certificate contains information such as the enterprise’s name, address, Udyam Registration Number, and date of issue. This certificate serves as proof of  […]',
        next:'https://medium.com/@finmsme1/everything-you-need-to-know-about-personal-loans-ab5dd52a4587'
        
        
        
  },


]



  return (
<>
<div id='font'>
<h1 className='fw-bold text-center ' style={{marginTop:'150px'}}>Blog & Stories</h1>
<div id='font' className='blue-stoo container d-flex'>
    

   
{blostor.map((jutire,idury)=>{



    return(
      <div className='row'>
            <div className="col  text-white"  key={(idury)}>
                  <div className='blog-story'>
                    <img src={jutire.busine} className="card-img-top"  alt="..."/>

                      <h5 className="p-3">{jutire.newgovt}</h5>
                      <p style={{color:'#FDB827'}}>{jutire.date}</p>
                      <p className="p-2 shadow">{jutire.des}</p>
                    
                          <a href={jutire.next} className="btn btn-success m-2 ">Read More</a>
        
                          
                    </div>
              </div>
                  
           
    </div>

);
}) }
</div>
</div>

</>
  );
}

export default Blogandstories