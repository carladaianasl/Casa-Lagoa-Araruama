import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import { fadeInDown, fadeIn } from 'react-animations';

const styles = {
	fadeInDown: {
		animation: 'x 2s',
		animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
	},

	fadeIn: {
		animation: 'x 1s',
		animationName: Radium.keyframes(fadeIn, 'fadeIn')
	}
}

class Home extends Component {
  render() {
    return (
        <div className="main">
        	<StyleRoot style={styles.fadeIn}>
	    		<div id="logo"><img src="img/logo.png"/></div>
	    			<div className="curved">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="WHITE" fill-opacity="1" d="M0,256L80,266.7C160,277,320,299,480,282.7C640,267,800,213,960,197.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
						<div className="photos"></div>
	    		</div>
    		</StyleRoot>

    		<div id="t1Index">
	    		<StyleRoot style={styles.fadeInDown}>
	            <h1> Venha curtir momentos únicos e inesquecíveis com sua família e amigos!</h1>
	            <h2>Saiba mais sobre o espaço!</h2>
	            </StyleRoot>

	        </div>
       	</div>
    );
  }
}

export default Home;