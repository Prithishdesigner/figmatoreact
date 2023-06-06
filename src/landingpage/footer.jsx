import React from 'react'
import { Facebook,Instagram,Twitter,Linkedin,Finsmse } from '../images/Vector1'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
  <>
  

  
    <div className="container d-flex justify-content-center p-3 signup-blog"  style={{backgroundColor:'#00B549',borderRadius:'10px'}}>
        <div className=" " >
               
               <h4 className='text-white'>Signup for our Blog:</h4>
         </div>
        
            <div className=" input-group w-50 ms-3" >
                <input type="email" className="form-control" placeholder="name@example.com" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-warning fw-bold" type="button" id="button-addon2">Subscribe</button>
            </div>
        
   
    </div>
 

  
    

   
    <div className='d-flex text-white ' style={{backgroundColor:'#5920C5'}}>
          <div className='container '>
                <div className='row foot-para'>
                      <div className=' mt-5 col'>
                              <a className="navbar-brand  mb-3" onClick={()=>navigate("/")} href="#"><Finsmse/></a>
                              <p className='mt-3 '>Most small businesses struggle to get a timely loan to grow. At FinMSME, we are committed to changing it. We are a technology platform creating easy loan origination, and leverage our segment understanding to create risk models. This brings multiple partners and lenders to fill the credit gap, helping small businesses access unsecured business loans, through a quick and simple process. We have tailored loans for Travel, Hotel, e-Commerce, Restaurant, Trading and Retail businesses.</p>
                      </div>


                        <div className=' col' style={{marginTop:'95px'}}>
                          <div className='d-flex mb-3'>
                              <div>
                              <Facebook/>
                              </div>
                              <div className='ms-3'>
                              <Twitter/>
                              </div>
                              <div className='ms-3'>
                              <Instagram/>
                              </div>
                              <div className='ms-3'>
                              <Linkedin/>
                              </div>
                          </div>

                            <h3>FinMSME HEADQUARTERS</h3>
                            <p>Plot No. 63, Second Floor, Sector – 44, Institutional Area, Gurgaon – 122002</p>
                            <p>Email : sales@FinMSME.com</p>

                        </div>
              </div>
        </div>
    </div>
  



    <div className="footer-top" style={{backgroundColor:'#5920C5'}}>
      <div className="container " >
        <div className="row pt-5">

         

              <div className="col">
              
                <ul className='list-unstyled '>
                  <li><i className="bx bx-chevron-right"></i> <a className='text-white' href="#">About FinMSME</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a onClick={()=>navigate("/part")} className='text-white' href="#">Our Partners</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a className='text-white' href="#">Careers  </a></li>
                  <li><i className="bx bx-chevron-right"></i> <a onClick={()=>navigate("/cashstudy")} className='text-white' href="#">Case Studies</a></li>
                  
                </ul>
              </div>

          <div class="col footer-links">
            
              <ul  className='list-unstyled'>
                <li><i className="bx bx-chevron-right"></i> <a className='text-white' href="#">Press Center</a></li>
                <li><i className="bx bx-chevron-right"></i> <a onClick={()=>navigate("/faq")} className='text-white' href="#">FAQ's</a></li>
                <li><i className="bx bx-chevron-right"></i> <a onClick={()=>navigate("/contact")} className='text-white' href="#">Contact Us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a className='text-white' href="#">Corporate Governance</a></li>
                <li><i className="bx bx-chevron-right"></i> <a className='text-white' href="#">Engineering & Technology</a></li>
              </ul>
          </div>


          <div class="col footer-links">
            
            <ul  className='list-unstyled'>
              <li><i className="bx bx-chevron-right"></i> <a className='text-white' href="#">Privacy Policy</a></li>
              <li><i className="bx bx-chevron-right"></i> <a className='text-white' href="#">Terms of Service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a className='text-white' href="#">Disclaimer</a></li>
              <li><i className="bx bx-chevron-right"></i> <a className='text-white' href="#">DLAI Code of Conduct</a></li>
              <li><i className="bx bx-chevron-right"></i> <a className='text-white' href="#">Site Map</a></li>
            </ul>
          </div>


          
          <div className="accordion col" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Quick Links
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                          <ul  className='list-unstyled lh-lg'>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">MSME Loan</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Term Loan</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">DLAI Code of Conduct</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Loan for Business Without Security</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Business Loan EMI Calculator</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Collateral Free Business Loans</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Invoice Discounting</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Merchant Advance Capital Loan</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Unsecured Line Of Credit</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">NBFC Business Loan</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Business Loan For Women</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Business Loan Interest Rate</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Flipkart Seller Loan</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Amazon Seller Loan</a></li>
                                  <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none' href="#">Working Capital Loan</a></li>
                                </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          City Links
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                          <ul  className='list-unstyled lh-lg'>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Delhi NCR</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Mumbai</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Hyderabad</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Bangalore</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Kolkata</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Gurgaon</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Jaipur</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Ahmedabad</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Lucknow</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Indore</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Faridabad</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Ghaziabad</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Loan In Noida</a></li>
                          </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Other Links
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                          <ul  className='list-unstyled lh-lg'>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">What is MSME</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Business Ideas</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Credit Score</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">GST Calculator</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Know Your Pan</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Healthcare Business</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Kirana Store Business Plan</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Construction Business</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Transportation Business</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Textiles Business</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Logistics Business</a></li>
                          <li><i className="bx bx-chevron-right"></i> <a className='text-black text-decoration-none'  href="#">Letter Of Credit</a></li>
                      
                          </ul>
                          </div>
                        </div>
                      </div>
           </div> 

          <p className='text-center text-white mt-5'>© 2023 Freshdigital. All Rights Reserved</p>

        </div>
      </div>
    </div>




 
    
    </>
  )
}

export default Footer