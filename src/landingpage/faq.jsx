import React from 'react'

const Faq = () => {
  return (
    <>
    <div id='font'>
      <h1 className='text-center fw-bold mb-5'>Frequently Asked Questions</h1>
    <div className='d-flex p-5' style={{backgroundColor:'#5920C5',marginBottom:'100px'}}>
        <div className='container col-6 ' style={{borderRadius:'30px'}}>


        <div className="accordion accordion-flush " id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    HOW DO I APPLY FOR A LOAN?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Applying is quick and easy and typically takes less than 10 minutes. We ask for basic information about you and your business. Securely connect your bank information so we can assess your business without long forms, waiting in line or having to dig up old paperwork. Your association with business services who we have partnered with helps get you more fitting loans.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    WHY DO SMALL BUSINESSES USE FinMSME?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">When asked, most business owners shared that access to capital is the single biggest roadblock to growing their businesses. With more cash flow, these businesses can hire new employees, purchase more inventory, take more orders, upgrade equipment and boost their marketing efforts.</div>
                  </div>
                </div>
                <div className="accordion-item ">
                  <h2 className="accordion-header ">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    WHAT DOCUMENTS ARE REQUIRED TO AVAIL A LOAN?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                    <div className='ms-4 mt-4 pb-3'>
                   <p>We need your</p>
                   <ol className=''>
                    <li>Pan Card</li>
                    <li>Aadhaar Card</li>
                    <li>Address proof of self and firm</li>
                    <li>Business registration proof</li>
                    <li>Bank Statement last 6 months.
                        In case of loan more than 15 lacs, latest ITR</li>
                   </ol>
                  </div>
                  </div>
                </div>
          </div>
 </div>



        <div className='p-3'>
            <h2 className='text-white'>If you have other queries, check our FAQ section</h2>
            <button type="button" className="btn text-white">CHECK FAQS</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Faq