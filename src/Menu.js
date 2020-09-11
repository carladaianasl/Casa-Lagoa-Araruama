import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';


class Menu extends Component {
  render() {
    return (
    <Router>
        <div className="menu">

          <nav>
            <ul>
              <li><Link to={'/'} className="selected" onClick={() => selected('0')}> Home </Link></li>
              <li><Link to={'/about'} onClick={() => selected('1')}>A CASA</Link></li>
              <li><Link to={'/contact'} onClick={() => selected('2')}>Fale Conosco</Link></li>
            </ul>
          </nav>
          
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
          </Switch>
        </div>
    </Router>
    );
  }
}

 function selected(name){
        
    var classSelected = document.querySelector(".selected");
    classSelected.classList.remove("selected");


    var tagMenu = document.getElementsByTagName("a")[name]; 
    tagMenu.classList.add("selected");
        
  }


export default Menu;