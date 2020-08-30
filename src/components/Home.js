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

	        <div className="boxes">
                <img src="img/dog.gif" width="100px"/>
                <h4 className="boxesTitulo">SOMOS PET FRIENDLY</h4>
                <h5 className="boxesTexto">Seus animais são muito bem vindos em sua estadia. Sabemos o quanto é difícil ficar sem a companhia deles, pois eles são parte da família e merecem total carinho e atenção.
                <p><span>Não cobramos taxa Pets</span></p></h5>
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
            

            <div className="coments">
	            <span> Venha curtir momentos únicos e inesquecíveis com sua família e amigos!</span>
	       	</div>

	       
       	</div>
    );
  }
}

export default Home;