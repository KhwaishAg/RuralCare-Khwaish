import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { FAQ } from './Pages/FAQ';
import { Scheme } from './Pages/Scheme';
import { Support } from './Pages/Support';
import {LoginSignup} from './Pages/LoginSignup';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>       
      <Route path='/about' element={<About/>}/> 
      <Route path='/faq' element={<FAQ/>}/>     
      <Route path='/scheme' element={<Scheme/>}/> 
      <Route path='/support' element={<Support/>}/> 
      <Route path='/login' element={<LoginSignup/>}/> 
    </Routes>
  </BrowserRouter>      
</div>

  );
}

export default App;
