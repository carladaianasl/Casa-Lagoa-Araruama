import React, { Component } from 'react';
import  ReactDOM  from  'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './style.css';




class Footer extends Component {
  render() {
    return (
    
      <div className="footer">
        <div className="footerContent">
          <span><SocialMediaIconsReact borderColor="rgba(149,209,255,0.27)" borderWidth="1" borderStyle="solid" icon="aboutme" iconColor="rgba(19,108,163,1)" backgroundColor="rgba(245,245,245,1)" iconSize="3" roundness="50%" url="/about" size="30" /></span>
          <span><SocialMediaIconsReact borderColor="rgba(149,209,255,0.27)" borderWidth="1" borderStyle="solid" icon="facebook" iconColor="rgba(19,108,163,1)" backgroundColor="rgba(245,245,245,1)" iconSize="3" roundness="50%" url="https://www.facebook.com/casaemararuama" size="30" /></span>
          <span><SocialMediaIconsReact borderColor="rgba(149,209,255,0.27)" borderWidth="1" borderStyle="solid" icon="instagram" iconColor="rgba(19,108,163,1)" backgroundColor="rgba(245,245,245,1)" iconSize="3" roundness="50%" url="https://www.instagram.com/casalagoararuama/" size="30" /></span>
          <span><a href="https://wa.me/5522991044764" target="_blank"><img src="img/whatsapp.svg" width="32"/></a></span>
          <h1>Copyright © 2020 | Developed by <a href="https://www.linkedin.com/in/carla-carvalho-009534b1/">Carla Carvalho</a></h1>
        </div>
        
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>

      </div>
    );
  }
}



export default Footer;