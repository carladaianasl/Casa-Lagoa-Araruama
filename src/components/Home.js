import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import { fadeInDown, fadeIn } from 'react-animations';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BoxHome from './boxHome';
import BoxNews from './boxNews';

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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


class Home extends Component {
  render() {
    return (
        <div className="main">


        	<StyleRoot style={styles.fadeIn}>
	    			<div id="logo"><img src="img/logo.png"/></div>

	    			<div className="curved">
	    			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,74.7C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

						<div className="photos"></div>

    				</div>
    		</StyleRoot>

    		<div id="t1Index">

	    		
	            <h1> Venha curtir momentos inesquecíveis com sua família e amigos!</h1>
	           

	            <div className="buttonMain">  
	            	<button className="ui basic button">
					  <i className="icon plus"></i>
					  Saiba mais
					</button>
				</div>

			

	            <div className="formIndex">

	            	<div className="formContent">

	            		<div className="titleForm">
	            			<h3>Verifique a disponibilidade e venha aproveitar! <hr /></h3>

	            		</div>

	            		<div className="ui form">

						  	<div className="two fields">
							    <div className="field">
							      <label>Check-in</label>
							      <input type="date" placeholder="First Name"/>
							    </div>
							    <div class="field">
							      <label>Check-out</label>
							      <input type="date" placeholder="Middle Name"/>
							    </div>
							</div>

							<div className="three fields">
							    <div className="field">
							      <label>Hóspedes</label>
								      	<select>
									      <option value="">-</option>
									      <option value="1">1</option>
									      <option value="0">2</option>
									      <option value="0">3</option>
									      <option value="0">4</option>
									      <option value="0">5</option>
									      <option value="0">6</option>
									      <option value="0">7</option>
									      <option value="0">8</option>
									    </select>
							    </div>
							</div>
							
							<div className="buttonForm"> 
								<button class="positive ui button">Reserve agora</button>
							</div>

				 </div>
						  

	            	</div>


	            </div>
	            

	        </div>





	        <div className="allBoxes">

		        <BoxHome 
		        	img = "img/dog.gif"
		        	title = "SOMOS PET FRIENDLY"
		        	content = "Seus animais são muito bem vindos em sua estadia. Sabemos o quanto é difícil ficar sem a companhia deles, pois eles são parte da família e merecem total carinho e atenção."
		        	subContent = "NÃO COBRAMOS TAXA PET " 
		        /> <div className="line"></div>

	            <BoxHome 
		        	img = "img/gps.gif"
		        	title = "LOCALIZAÇÃO"
		        	content = "Casa em ótima localização - em condomínio fechado - a 5 minutos do centro da cidade de carro. Bairro tranquilo com ruas asfaltadas. Além disso, é excelente para a prática de esportes ao ar livre."
		        	subContent = "" 
		        /> <div className="line"></div>

		        <BoxHome 
		        	img = "img/pool.gif"
		        	title = "PISCINA E CHURRASCO"
		        	content = "A piscina e a churrasqueira são para uso exclusivo de nossos hóspedes. Mantemos a piscina limpa com a colocação periódica de produtos. Ainda curtindo com a família e amigos um lindo pôr do sol."
		        	subContent = "" 
		        /> <div className="line"></div>

		        <BoxHome 
		        	img = "img/kitchen.gif"
		        	title = "CASA COMPLETA"
		        	content = "Casa mobiliada entregue com limpeza e higienização em todos os ambientes. Disponibilizamos roupas de cama e banho para os hóspedes. Cozinha ja equipada com utensílios e eletrodomésticos."
		        	subContent = "" 
		        /> 

		    </div>

            <div className="coments">
	            <span> Depoimentos de nossos hóspedes!</span>
		            
	       	</div>

	       	<div className="boxNews">
	       		
	       		<BoxNews
	       			img= "https://s2.glbimg.com/wReymxMIoyKeFK5FQAvSECiU7rQ=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/L/1/W5AXgaRIArEm9YCG7aQQ/whatsapp-image-2020-08-12-at-13.07.00-2-.jpeg"
	       			title= "Fique por dentro!"
	       			content= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	       			position = "left"
	       		/> 	


	       		<BoxNews
	       			img= "../img/img1.jpg"
	       			title= "Aberta pré-reserva para Ano novo!"
	       			content= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
	       			position = "right"
	       		/> 		

	       		<BoxNews
	       			img= "https://s2.glbimg.com/wReymxMIoyKeFK5FQAvSECiU7rQ=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/L/1/W5AXgaRIArEm9YCG7aQQ/whatsapp-image-2020-08-12-at-13.07.00-2-.jpeg"
	       			title= "Fique por dentro!"
	       			content= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	       			position = "left"
	       		/> 	

	       	</div>


	       	<div className="newsletter">

	       		<h3>Quer ficar por dentro das promoções e novidades? Cadastre-se gratuitamente!
	       		<hr />
	       		</h3>

	       		<div class="ui form">
				  <div class="three fields">
				    <div class="field">
				      <label>Nome</label>
				      <input type="text" placeholder="Nome" />
				    </div>
				    <div class="field">
				      <label>E-mail</label>
				      <input type="text" placeholder="E-mail" />
				    </div>
				    <div class="field">
				      <label>WhatsApp</label>
				      <input type="text" placeholder="Receber ofertas por WhatsApp" />
				    </div>
				</div>

				<button class="ui right floated button">
					  Cadastrar
				</button>


				</div>
	       	</div>




	    


	       
       	</div>
    );
  }
}

export default Home;