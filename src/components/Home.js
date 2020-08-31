import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import { fadeInDown, fadeIn } from 'react-animations';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
						<svg name="first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7ca63" fill-opacity="1" d="M0,256L80,266.7C160,277,320,299,480,282.7C640,267,800,213,960,197.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
						<div className="photos"></div>
						<svg name="second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,256L80,266.7C160,277,320,299,480,282.7C640,267,800,213,960,197.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    				</div>
    		</StyleRoot>

    		<div id="t1Index">
	    		<StyleRoot style={styles.fadeInDown}>
	            <h1> Venha curtir momentos únicos e inesquecíveis com sua família e amigos!</h1>
	            <span><button className="buttonMain">SAIBA MAIS</button></span>
	            </StyleRoot>
	        </div>

	        <div className="allBoxes">
		        <div className="boxes">
	                <img src="img/dog.gif" width="100"/>
	                <h4 className="boxesTitulo">SOMOS PET FRIENDLY</h4>
	                <h5 className="boxesTexto">Seus animais são muito bem vindos em sua estadia. Sabemos o quanto é difícil ficar sem a companhia deles, pois eles são parte da família e merecem total carinho e atenção.
	                <p><span>- NÃO COBRAMOS TAXA PET</span></p></h5>
	            </div>
	                
	                <div className="line"></div>


	            <div className="boxes">
	                <img src="img/gps.gif" width="100px"/>
	                <h4 className="boxesTitulo">LOCALIZAÇÃO</h4>
	                <h5 className="boxesTexto">Casa em ótima localização - em condomínio fechado - a 5 minutos do centro da cidade de carro. Bairro tranquilo com ruas asfaltadas. Além disso, é excelente para a prática de esportes ao ar livre.</h5>
	            </div>

	                <div className="line"></div>
	            
	            <div className="boxes">
	                <img src="img/pool.gif" width="100px"/>
	                <h4 className="boxesTitulo">PISCINA E CHURRASCO</h4>
	                <h5 className="boxesTexto">A piscina e a churrasqueira são para uso exclusivo de nossos hóspedes. Mantemos a piscina limpa com a colocação periódica de produtos. Ainda curtindo com a família e amigos um lindo pôr do sol.</h5>
	            </div>

	                <div className="line"></div>
	            
	            <div className="boxes">
	                <img src="img/kitchen.gif" width="100px"/>
	                <h4 className="boxesTitulo">CASA COMPLETA</h4>
	                <h5 className="boxesTexto">Casa mobiliada entregue com limpeza e higienização em todos os ambientes. Disponibilizamos roupas de cama e banho para os hóspedes. Cozinha ja equipada com utensílios e eletrodomésticos.</h5>
	            </div>
	        </div>   

            <div className="coments">
	            <span> Veja os comentários de nossos hóspedes!</span>
		            <Carousel
					  swipeable={false}
					  draggable={false}
					  showDots={false}
					  responsive={responsive}
					  ssr={true} // means to render carousel on server-side.
					  infinite={true}
					  autoPlay={this.props.deviceType !== "mobile" ? true : false}
					  autoPlaySpeed={5000}
					  keyBoardControl={true}
					  customTransition="all .5"
					  transitionDuration={500}
					  containerClass="carousel-container"
					  removeArrowOnDeviceType={["tablet", "mobile"]}
					  deviceType={this.props.deviceType}
					  customTransition="transform 300ms ease-in-out"
					  dotListClass="custom-dot-list-style"
					  itemClass="carousel">  
					 	<div>
					 		
					 		
					 		<div className="chat">Foram 5 dias maravilhosos.eu e minha família adoramos e pretendemos voltar outras vezes. Vc e o seu esposo com uma recepção incrível.
					 			<div className="chatIcon"><img src="img/chat.svg" width="40"/></div>
					 			<div className="chatName">Carla Carvalho | DEZ 2019</div>
					 			<div className="aspasLeft"><img src="img/markLeft.svg" width="25"/></div>
					 			<div className="aspasRight"><img src="img/markRight.svg" width="25"/></div>
					 		</div>
					 		
					 	</div>
					  	<div>
					 		
					 		
					 		<div className="chat">Muito aconchegante, anfitrião solícito e com excelente recepção.
					 			<div className="chatIcon"><img src="img/chat.svg" width="40"/></div>
					 			<div className="chatName">Marcos | MAIO 2020</div>
					 			<div className="aspasLeft"><img src="img/markLeft.svg" width="25"/></div>
					 			<div className="aspasRight"><img src="img/markRight.svg" width="25"/></div>
					 		</div>
					 		
					 	</div>
					  	<div>
					 		
					 		
					 		<div className="chat">Melhor casa de temporada que eu e minha família ficamos! Melhor recepção, fomos bem direcionados para todos os lugares, rimos bastante juntos! 
					 			<div className="chatIcon"><img src="img/chat.svg" width="40"/></div>
					 			<div className="chatName">André | JUN 2019</div>
					 			<div className="aspasLeft"><img src="img/markLeft.svg" width="25"/></div>
					 			<div className="aspasRight"><img src="img/markRight.svg" width="25"/></div>
					 		</div>
					 		
					 	</div>
					  	<div>
					 		
					 		
					 		<div className="chat">Foram 5 dias maravilhosos.eu e minha família adoramos e pretendemos voltar outras vezes. Vc e o seu esposo com uma recepção incrível.
					 			<div className="chatIcon"><img src="img/chat.svg" width="40"/></div>
					 			<div className="chatName">Carla Carvalho | DEZ 2020</div>
					 			<div className="aspasLeft"><img src="img/markLeft.svg" width="25"/></div>
					 			<div className="aspasRight"><img src="img/markRight.svg" width="25"/></div>
					 		</div>
					 		
					 	</div>
					  	<div>
					 		
					 		<div className="chat">Muito aconchegante, anfitrião solícito e com excelente recepção.
					 			<div className="chatIcon"><img src="img/chat.svg" width="40"/></div>
					 			<div className="chatName">Marcos | MAIO 2020</div>
					 			<div className="aspasLeft"><img src="img/markLeft.svg" width="25"/></div>
					 			<div className="aspasRight"><img src="img/markRight.svg" width="25"/></div>
					 		</div>
					 		
					 	</div>
					 	<div>
					 		
					 		
					 		<div className="chat">Foram 5 dias maravilhosos.eu e minha família adoramos e pretendemos voltar outras vezes. Vc e o seu esposo com uma recepção incrível.
					 			<div className="chatIcon"><img src="img/chat.svg" width="40"/></div>
					 			<div className="chatName">Carla Carvalho | DEZ 2020</div>
					 			<div className="aspasLeft"><img src="img/markLeft.svg" width="25"/></div>
					 			<div className="aspasRight"><img src="img/markRight.svg" width="25"/></div>
					 		</div>
					 		
					 	</div>
					  	<div>
					 		
					 		
					 		<div className="chat">Muito aconchegante, anfitrião solícito e com excelente recepção.
					 			<div className="chatIcon"><img src="img/chat.svg" width="40"/></div>
					 			<div className="chatName">Marcos | MAIO 2020</div>
					 			<div className="aspasLeft"><img src="img/markLeft.svg" width="25"/></div>
					 			<div className="aspasRight"><img src="img/markRight.svg" width="25"/></div>
					 		</div>
					 		
					 	</div>
					  	<div>
					 		
					 		
					 		<div className="chat">Foram 5 dias maravilhosos.eu e minha família adoramos e pretendemos voltar outras vezes. Vc e o seu esposo com uma recepção incrível.
					 			<div className="chatIcon"><img src="img/chat.svg" width="40"/></div>
					 			<div className="chatName">Carla Carvalho | DEZ 2020</div>
					 			<div className="aspasLeft"><img src="img/markLeft.svg" width="25"/></div>
					 			<div className="aspasRight"><img src="img/markRight.svg" width="25"/></div>
					 		</div>
					 		
					 	</div>
					</Carousel>
	       	</div>

	       	<div className="news">
	       		<div className="photoMain"></div>
	            <span className="newsTopic">As belezas da Região</span>
	            <span className="newsText"> 
	            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 	            </span>
	       	</div>


	       	<div className="news2">
	       		<div className="photoMain"></div>
	            <span className="newsTopic">Casa em frente a Lagoa</span>
	            <span className="newsText"> 
	            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 	            </span>
	       	</div>


	       
       	</div>
    );
  }
}

export default Home;