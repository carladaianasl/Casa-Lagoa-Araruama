import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Footer from './Footer';
import './style.css';
import './style_mobile.css';


ReactDOM.render(<Menu />, document.getElementById('Menu'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));