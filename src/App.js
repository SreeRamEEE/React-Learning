
import './App.css';
import Content from './classComponents/content';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './functionComponents/dashboard';
import Home from './functionComponents/home';
import About from './functionComponents/about';
import Contextapi from './functionComponents/contextapi';
import { createContext, useState } from 'react';
import { connect } from 'react-redux';
import {incPlayerOne,decPlayerOne, incPlayerTwo, decPlayerTwo} from './Actions';

export const Store1 = createContext();
function App({playerOne,incPlayerOne,decPlayerOne,}) {
  
  const [data,setdata]=useState({name:"Sriram",city:"Hyderabad"});
  return (
    // <Store1.Provider value={[data,setdata]}>
    <div className="App">
    <center>
    </center>
    <h3>Player1 details</h3>
    <p>Name:{playerOne.name} |{' '} score: {playerOne.score}</p><br/>
    <button onClick={()=>incPlayerOne()}> Increment</button>
    <button  onClick={()=>decPlayerOne()}> Decrement</button>

    {/* <Contextapi></Contextapi> */}
    
     <BrowserRouter>
       <Routes>
         <Route path='/dashboard/:userId' element={<Dashboard/>}  />
         <Route path='/about' element={<About/>}  />
         <Route path='/home' element={<Home/>}  />
         <Route path='/' element={<Content/>}  />
         <Route path='/contextapi' element={<Contextapi/>}  />
       </Routes>
     </BrowserRouter>
    </div>
    // </Store1.Provider>
  );
}

const mapStateProps= state=>({
  playerOne:state.playerOne,
})

export default connect(mapStateProps,{incPlayerOne,decPlayerOne,incPlayerTwo,decPlayerTwo}) (App);
