import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import './Custom.css';
import './App.css';



class App extends Component {
  render (){


    return(
    <div className="App" >
   <Router>
    <div >
      
      <Route exact path='/' render={() => (<Home  />)}/> 
      <Route exact path='/about' render={() => (<About  />)}/> 
 
    
    </div>
    </Router>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </div>
  )}
}

export default App;
