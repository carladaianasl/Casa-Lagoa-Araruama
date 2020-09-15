import React, { Component } from 'react';
import formContat from './formContat';

class Contact extends Component {
  render() {
    return (
        <div className="main form">

        	<div className="logoMenor"><img src={require('../img/logo.png')} /></div>

				<div className="imgContact">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.7751237135894!2d-42.37324068556093!3d-22.884764042837745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9768f5bd309cad%3A0xb76595f92f9f56a2!2sR.%20Pref.%20Antonio%20Raposo%2C%202761%20-%20Pte.%20dos%20Leites%2C%20Araruama%20-%20RJ%2C%2028970-000!5e0!3m2!1sen!2sbr!4v1600192471266!5m2!1sen!2sbr"  frameborder="0" style={{ border:"0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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

