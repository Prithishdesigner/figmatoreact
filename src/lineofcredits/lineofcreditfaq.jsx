import React from 'react'

const Lineofcreditfaq = () => {
  return (
    <>
    <div id='font'>
    <div className="container mb-5">
        <h1 className="mb-5 mt-5 text-center fw-bold">Line Of Credit</h1>
        <h5>What Is Line Of Credit</h5>
        <p>A line of credit is a credit facility offered by NBFCs, bank or other financial institution to a government, business or individual customer that helps the customer to avail the facility when in needs of the funds.

            Line of Credit or overdraft facility is best suited for frequent cash inflow. Businesses typically need money to avail cash discounts by paying upfront or on time, extend credit to customers, pay off vendors or meet seasonal demands. Unsecured Line of Credit Loans from FinMSME are the best solutions for these needs.</p>
    </div>



    <div className="container mb-5" >
        <h3 className="mb-4">FAQ Related to Line of Credit</h3>
        <p className="">Line of Credit is a loan product that is designed by banks to meet any immediate need for money by companies. This is a corporate product in which the company is assigned a credit limit by the bank. Here are some of the FAQs related to Line of Credit:</p>

    </div>




    <div className="accordion container mb-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Which are the domains of business which are offered a line of credit?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                The line of credit is specifically designed for businesses that lie in the category of businesses, manufacturing units, traders, retailers, service providers, etc. These can also include businesses in the travel and hospitality services, and the ones in the e-commerce space. However, a line of credit is not for retail customers.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How is a line of credit different from a loan?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Line of credit is an extension of an overdraft (OD) facility wherein the bank assigns a limit under which the borrower can withdraw. While a loan is granted one-time based on the borrower’s profile, it is a non-revolving credit facility, unlike a line of credit. Also, a loan has a fixed amortisation schedule with a fixed or floating interest rate.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                What are some of the differences between an overdraft facility and a line of credit facility?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Line of credit facility has a pre-sanctioned limit, beyond which a corporate borrower cannot go. This is unlike an overdraft facility, wherein the borrower is allowed to withdraw funds over and above his account balance. In a nutshell, a line of credit is a subset of an overdraft facility.
            </div>
          </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                How the repayment of the line of credit works? Can a borrower repay it anytime he wants?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                As a corporate borrower who has used the line of credit facility, now is the time for repayment. It is ideally advised by money managers and financial advisors to repay the amount withdrawn as soon as possible and don’t delay it unless necessary. This is because the interest charged will be lesser when you repay it early, thereby decreasing the total interest outgo.
              </div>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default Lineofcreditfaq