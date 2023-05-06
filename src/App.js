import './App.css';
// import Navbar from './landingpage/Navbar';
// import Banner from './landingpage/banner';
// import Card from './landingpage/card';
// import Centerpart from './landingpage/centerpart.jsx';
// import FinMSMEhelps from './landingpage/FinMSMEhelps.jsx';
// import Yourindustry from './landingpage/yourindustry.jsx';
// import Enableloan from './landingpage/enableloan.jsx';
// import Blogandstories from './landingpage/blogandstories.jsx';
// import Faq from './landingpage/faq';
// import Enableloan1 from './landingpage/enableloan1';
// import Footer from './landingpage/footer';






// import Termloanbanner from '../src/termloans/termloanbanner.jsx'
// import Termloancard from '../src/termloans/termloancard'
// import Termloancenterpart from '../src/termloans/termloancenterpart'
// import Lineofcreditbanner from './lineofcredits/lineofcreditbanner';



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import LineofCredits from './pages/Lineofcredits';
import InvoiceDiscounting from './pages/InvoiceDiscounting';
import MechantCashAdvance from './pages/MechantCashAdvance';
import Travelagent from './pages/Travelagent';
import Ecommerce from './pages/Ecommerce';
import Hotels from './pages/Hotels';
import Retails from './pages/Retails';
import Restaurant from './pages/Restaurant';
import Stratup from './pages/Startup';
import Navebarspartn from './pages/Navebarspartn';
import Navebarcashstudy from './pages/Navebarcashstudy';
import Navebarcontactus from './pages/Navebarcontactus';

import Navebarfreqs from './pages/Navebarfreqs';













function App() {
  return (
    <>



      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/term" element={<Terms />} />
          <Route path="/line" element={<LineofCredits />} />
          <Route path="/invoice" element={<InvoiceDiscounting />} />
          <Route path="/merchant" element={<MechantCashAdvance />} />
          <Route path="/travage" element={<Travelagent/>} />
          <Route path="/ecome" element={<Ecommerce/>} />
          <Route path="/hotel" element={<Hotels/>} />
          <Route path="/retail" element={<Retails/>} />
          <Route path="/resta" element={<Restaurant/>} />
          <Route path="/start" element={<Stratup />} />
          <Route path="/part" element={<Navebarspartn />} />
          <Route path="/cashstudy" element={<Navebarcashstudy />} />
          <Route path="/contact" element={<Navebarcontactus />} />
          <Route path="/faq" element={<Navebarfreqs />} />
        
         
          </Routes>
      </BrowserRouter>
    
  


   
    
    </>
  );
}

export default App;
