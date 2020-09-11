import React, { Component } from 'react';

const formContat = (props) =>{
	return(
	<div>
		<form class="ui form">
 			<h4 class="ui dividing header">Fale conosco</h4>
  			<div class="field">
   				<label>Name</label>
    			<div class="two fields">
     				<div class="field">
        			<input type="text" name="shipping[first-name]" placeholder="First Name" />
      				</div>
     				<div class="field">
       				<input type="text" name="shipping[last-name]" placeholder="Last Name" />
      				</div>
      			</div>
      		</div>
      	</form>
    </div>
	);
};

export default formContat;
