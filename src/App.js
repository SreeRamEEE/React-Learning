
import './App.css';
import Content from './classComponents/content';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './functionComponents/dashboard';
import Home from './functionComponents/home';
import About from './functionComponents/about';
import Reduxexample from './functionComponents/contextapi';
import { createContext, useState } from 'react';


export const Store1 = createContext();
function App({playerOne,incPlayerOne,decPlayerOne,}) {
  const [data,setdata]=useState({name:"Sriram",city:"Hyderabad"});
  return (
    <Store1.Provider value={[data,setdata]}>
    <div className="App">
    <center>
    </center>
    
    
     <BrowserRouter>
       <Routes>
         <Route path='/dashboard/:userId' element={<Dashboard/>}  />
         <Route path='/about' element={<About/>}  />
         <Route path='/home' element={<Home/>}  />
         <Route path='/' element={<Content/>}  />
         <Route path='/reduxexample' element={<Reduxexample/>}  />
       </Routes>
     </BrowserRouter>
    </div>
     </Store1.Provider>
  );
}



export default App;
