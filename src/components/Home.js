import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className="main">
          	<StyleRoot style={styles.fadeIn}>
    			<div id="logo"><img src="img/logo.png"/></div>

           		<div class="curved">    
                	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,240C840,267,960,277,1080,261.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                	<div class="photos"></div>
            	</div>
    		</StyleRoot>
        </div>
    );
  }
}

export default Home;