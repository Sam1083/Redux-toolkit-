import'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Daraz from './components/Daraz';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Language from './components/Language';
import BecomeASeller from './components/BecomeASeller';
import DarazAffiliateProgram from './components/DarazAffiliateProgram';
import HelpAndSupport from './components/HelpAndSupport';
import {Routes, Route} from 'react-router-dom';
import ProductDescription from './components/ProductDescription';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chat from './components/Chat';
import CheckOut from './components/CheckOut';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { calculateTotal } from './features/bucketSlice';


 




function App() {

  const {products} =useSelector((store)=>store.bucket)

  const dispatch=useDispatch();


  useEffect(()=>{
  dispatch(calculateTotal());

  },[products,dispatch]);


  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Daraz/>}> </Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Signup" element={<Signup/>} ></Route>
    <Route path="/Cart" element={<Cart/>}></Route>
    <Route path="/language" element={<Language/>} ></Route>
    <Route path="/BecomeASeller" element={<BecomeASeller/>} ></Route>
    <Route path="/DarazAffiliateProgram" element={<DarazAffiliateProgram/>} ></Route>
    <Route path="/HelpAndSupport" element={<HelpAndSupport/>} ></Route>
    <Route path="SaleCards/:id/" element={<ProductDescription/>} ></Route>
    {/* <Route path="/OtherProducts" element={</>} ></Route> */}
    {/* <Route path="Category/" element={<Category/>}></Route> */}
    <Route  element={<Dashboard/>} path="/Dashboard"/>
    <Route path="Chat" element={<Chat/>} ></Route>
    <Route path="CheckOut" element={<CheckOut/>} ></Route>

    


  

    
    </Routes>
    <Contact/>
    <Footer/>

    <ToastContainer/>
    </>
  );
}
 

export default App;
