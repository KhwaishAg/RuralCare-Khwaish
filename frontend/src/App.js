// import { Home } from './Pages/Home';
// import { About } from './Pages/About';
// import { FAQ } from './Pages/FAQ';
// import { Scheme } from './Pages/Scheme';
// import { Support } from './Pages/Support';
// import { LoginSignup } from './Pages/LoginSignup';
// import { PatientLogin } from './Pages/PatientLogin';
// import { PatientSignup } from './Pages/PatientSignup';
// import { DoctorLogin } from './Pages/DoctorLogin';
// import './App.css';
// import { Navbar } from './Components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { PatientDashboard } from "./Pages/PatientDashboard";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />       
//           <Route path="/about" element={<About />} /> 
//           <Route path="/faq" element={<FAQ />} />     
//           <Route path="/scheme" element={<Scheme />} /> 
//           <Route path="/support" element={<Support />} /> 
//           <Route path="/login" element={<LoginSignup />} /> 
//           <Route path="/patient-login" element={<PatientLogin />} />
//           <Route path="/doctor-login" element={<DoctorLogin />} />
//           <Route path="/signup" element={<PatientSignup />} />
//           <Route path="/dashboard" element={<PatientDashboard />} />
//         </Routes>
//       </BrowserRouter>      
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { FAQ } from "./Pages/FAQ";
import { Scheme } from "./Pages/Scheme";
import { Support } from "./Pages/Support";
import { PatientLogin } from "./Pages/PatientLogin";
import { PatientSignup } from "./Pages/PatientSignup";
import { DoctorLogin } from "./Pages/DoctorLogin";
import { PatientDashboard } from "./Pages/PatientDashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/support" element={<Support />} />

          {/* Auth Pages */}
          <Route path="/patient-login" element={<PatientLogin />} />
          <Route path="/signup" element={<PatientSignup />} />
          <Route path="/doctor-login" element={<DoctorLogin />} />

          {/* Protected Pages */}
          <Route path="/dashboard" element={<PatientDashboard />} />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
