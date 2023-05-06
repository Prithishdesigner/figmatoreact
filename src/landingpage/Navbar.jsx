import React from 'react'
import {Finsmse} from '../images/Vector1'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div id='font'>
      <nav className="navbar navbar-expand-lg fw-bold" data-bs-theme="dark" style={{backgroundColor: '#5920C5'}}>
        <div className="container p-4">
            <a className="navbar-brand" href="#"><Finsmse/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Solutions
                </a>
                <ul className="dropdown-menu">
                  <div className='d-flex'>
                  <div>
                    <li><a onClick={()=>navigate("/term")} className="dropdown-item" href="#">Term Loans</a></li>
                    <li><a onClick={()=>navigate("/line")} className="dropdown-item" href="#">Line Of Credit</a></li>
                    <li><a onClick={()=>navigate("/invoice")} className="dropdown-item" href="#">Invoice Discounting</a></li>
                    <li><a onClick={()=>navigate("/merchant")} className="dropdown-item" href="#">Merchant Cash Advance</a></li>
                    </div>
                    <div>
                    <li><a onClick={()=>navigate("/travage")} className="dropdown-item" href="#">Travel</a></li>
                    <li><a onClick={()=>navigate("/ecome")} className="dropdown-item" href="#">E-Commerce</a></li>
                    <li><a onClick={()=>navigate("/hotel")} className="dropdown-item" href="#">Hotels</a></li>
                    <li><a onClick={()=>navigate("/retail")} className="dropdown-item" href="#">Retail</a></li>
                    <li><a onClick={()=>navigate("/resta")} className="dropdown-item" href="#">Restaurants</a></li>
                    <li><a onClick={()=>navigate("/start")} className="dropdown-item" href="#">Startup</a></li>
                    </div>
                    </div>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={()=>navigate("/part")} aria-current="page" href="#">Partners</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={()=>navigate("/faq")} href="#">FAQ’S</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={()=>navigate("/cashstudy")}  href="#">Case Studies</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={()=>navigate("/contact")} href="#">Contact</a>
                </li>
            </ul>
            </div>
            <button type="button" onClick={()=>navigate("/")} className="btn btn-success me-4 fw-bold">Back</button>
            <button type="button" className="btn btn-success me-4 fw-bold">Apply Now</button>
            <button type="button" className="btn btn-outline-success text-white fw-bold">7827122122</button>
        </div>
        </nav>
        </div>
  )
}

export default Navbar