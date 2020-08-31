import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="main">
        	<div className="sorry">
        		<h2>Sorry for the inconvenience!</h2>
	          	<h3> We are working to give you a completely <b>new experience.</b></h3>

	          	<div className="gear1"><img src="img/gear.png" width="180" name="gear1"/></div>
	          	<div className="gear2"><img src="img/gear.png" width="220" name="gear2"/></div>
	        </div>
        </div>
    );
  }
}

export default About;