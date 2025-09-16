// import React, { useState } from 'react'
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import { Link } from 'react-router-dom';

// export const Navbar = () => {
//   const [menu,setMenu]=useState("home");
//   return (
//     <div>
//        <div className='navbar'>
//             <div className="nav-logo">
//                 <img src={logo} alt="" />
//                 <p>RuralCare+</p>
//             </div>
            
//             <ul className='nav-menu'>
//             <li 
//               className={menu === "Home" ? "active" : ""} 
//               onClick={() => setMenu("Home")}
//             >
//               <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
//             </li>

//             <li 
//               className={menu === "About" ? "active" : ""} 
//               onClick={() => setMenu("About")}
//             >
//               <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
//             </li>

//             <li 
//               className={menu === "FAQ" ? "active" : ""} 
//               onClick={() => setMenu("FAQ")}
//             >
//               <Link to='/faq' style={{ textDecoration: 'none' }}>FAQ</Link>
//             </li>

//             <li 
//               className={menu === "Schemes" ? "active" : ""} 
//               onClick={() => setMenu("Schemes")}
//             >
//               <Link to='/scheme' style={{ textDecoration: 'none' }}>Scheme</Link>
//             </li>

//             <li 
//               className={menu === "Support" ? "active" : ""} 
//               onClick={() => setMenu("Support")}
//             >
//               <Link to='/support' style={{ textDecoration: 'none' }}>Support</Link>
//             </li>
//           </ul>


//             <div className='nav-login'>
//                 <Link to='/login'><button>Login/SignUp</button></Link>
//             </div>
//         </div> 
//     </div>
//   )
// }

// import React, { useState } from 'react'
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import { Link } from 'react-router-dom';

// export const Navbar = ({ onLoginClick }) => {
//   const [menu, setMenu] = useState("home");

//   return (
//     <div>
//       <div className='navbar'>
//         <div className="nav-logo">
//           <img src={logo} alt="" />
//           <p>RuralCare+</p>
//         </div>

//         <ul className='nav-menu'>
//           <li 
//             className={menu === "Home" ? "active" : ""} 
//             onClick={() => setMenu("Home")}
//           >
//             <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
//           </li>

//           <li 
//             className={menu === "About" ? "active" : ""} 
//             onClick={() => setMenu("About")}
//           >
//             <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
//           </li>

//           <li 
//             className={menu === "FAQ" ? "active" : ""} 
//             onClick={() => setMenu("FAQ")}
//           >
//             <Link to='/faq' style={{ textDecoration: 'none' }}>FAQ</Link>
//           </li>

//           <li 
//             className={menu === "Schemes" ? "active" : ""} 
//             onClick={() => setMenu("Schemes")}
//           >
//             <Link to='/scheme' style={{ textDecoration: 'none' }}>Scheme</Link>
//           </li>

//           <li 
//             className={menu === "Support" ? "active" : ""} 
//             onClick={() => setMenu("Support")}
//           >
//             <Link to='/support' style={{ textDecoration: 'none' }}>Support</Link>
//           </li>
//         </ul>

//         <div className='nav-login'>
//           <button onClick={onLoginClick}>Login/SignUp</button>
//         </div>
//       </div> 
//     </div>
//   )
// }

import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { LoginSignup } from '../../Pages/LoginSignup';

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div>
      <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>RuralCare+</p>
        </div>
        
        <ul className='nav-menu'>
          <li className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>
            <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
          </li>
          <li className={menu === "About" ? "active" : ""} onClick={() => setMenu("About")}>
            <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
          </li>
          <li className={menu === "FAQ" ? "active" : ""} onClick={() => setMenu("FAQ")}>
            <Link to='/faq' style={{ textDecoration: 'none' }}>FAQ</Link>
          </li>
          <li className={menu === "Schemes" ? "active" : ""} onClick={() => setMenu("Schemes")}>
            <Link to='/scheme' style={{ textDecoration: 'none' }}>Scheme</Link>
          </li>
          <li className={menu === "Support" ? "active" : ""} onClick={() => setMenu("Support")}>
            <Link to='/support' style={{ textDecoration: 'none' }}>Support</Link>
          </li>
        </ul>

        <div className='nav-login'>
          <button onClick={() => setIsLoginOpen(true)}>Login/SignUp</button>
        </div>
      </div>

      {/* Render the Login modal when open */}
      {isLoginOpen && <LoginSignup onClose={() => setIsLoginOpen(false)} />}
    </div>
  );
};
