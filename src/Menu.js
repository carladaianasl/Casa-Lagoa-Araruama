import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';


class Menu extends Component {
  render() {
    return (
    <Router>
        <div>

          <nav>
            <ul>
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </nav>
          
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
    </Router>
    );
  }
}

export default Menu;