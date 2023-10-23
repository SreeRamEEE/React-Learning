
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
// import {p}

class Content  extends React.Component{
    adPreviewSandboxEnabled=true;
    isNativeAdIpadMacEnabled=false;
    state={
        name:"Sriram Gopu",
        userId:"104567",
        first:'Hanush',
        middle:'srihan',
        last:'Gopu',
      
    }
render(){
    return (
       
    <div>
    <center>

        <h2>Hello, {this.state.name}</h2>
      <Link className="customLink" to={`/dashboard/${this.state.userId}`}>Dashboard</Link> &nbsp;
      <Link className="customLink" to={'/home?name=sriram&age=27'}>Home</Link> &nbsp;
      <Link className="customLink" to={'/about'}>About</Link> &nbsp;
      <Link className="customLink" to={'/contextapi'}>contextAPI</Link> &nbsp;

      </center>

      <div >
      

    
      </div>
    </div>
    );
  
}
}

export default Content;