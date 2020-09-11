import React, { Component } from 'react';
import formContat from './formContat';

class Contact extends Component {
  render() {
    return (
        <div className="main form">

        	<div className="logoMenor"><img src={require('../img/logo-menor.png')} /></div>

        	<div className="curvaContact">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFCC" fill-opacity="1" d="M0,288L80,293.3C160,299,320,309,480,293.3C640,277,800,235,960,218.7C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>        	
				<div className="imgContact"></div>
        	</div>
        		
	        <div className="mainForm">
	        	<form className="ui form">
		 			<h3 className="ui dividing header">Está com dúvida? Mande uma mensagem pra gente!</h3>
		  			<div className="field">
		   				<label>Name</label>
		    			<div class="two fields">
		     				<div class="field">
		        			<input type="text" name="shipping[first-name]" placeholder="First Name" />
		      				</div>
		     				<div class="field">
		       				<input type="text" name="shipping[last-name]" placeholder="Last Name" />
		      				</div>
		      			</div>
		      			 <div class="equal width fields">
						    <div class="field">
							    <label>Telefone</label>
							    <input type="text" placeholder="Telefone/WhatsApp" />
						   	</div>
							<div class="field">
							    <label>E-mail</label>
							    <input type="text"  placeholder="E-mail para contato" />
							</div>
						</div>
		      			<div class="ui form">
						  	<div class="field">
						    	<label>Motivo do Contato</label>
						    	<input type="text" />
						 	 </div>
						</div>
		      			<div class="field">
						    <label>Text</label>
						    <textarea spellcheck="false"></textarea>
					  	</div>
					  	<button class="positive ui button">Enviar</button>
		      		</div>
		      	</form>

		      	<h3 class="ui dividing header">Gostaria de falar agora? Ligue pra gente ou mande um whatsapp!</h3>
		      	<h4>
		      	<p> Telefone: (22) 9 9104 4764</p>	
				E-mail: casararuama7@gmail.com
				</h4>

				<a href="https://wa.me/5522991044764"><button class="positive ui button">Mensagem via WhatsApp</button></a>

				
	        </div>
        </div>
    );
  }
}

export default Contact;

