import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="main">
        	<div className="BackgroundMain">

        		<div className="logoMenor"><img src={require('../img/logo.png')} /></div>

        		<h1>Olá, sejam bem vindos! </h1>

        		<div className="textAbout">
        		
        		<h3><p>
        		A Casa Lagoa Araruama fica em frente a lagoa de Araruama, maior lagoa salgada da América Latina, a 3Km do centro da cidade. Lugar perfeito para curtir ótimos momentos em família e amigos. Você vai amar apreciar o pôr do sol e conectar-se com a natureza.
        		</p></h3>

        		<h3><p>
        		A Casa fica em frente a lagoa de Araruama, maior lagoa salgada da América Latina, a 3Km do centro da cidade. Lugar perfeito para curtir ótimos momentos em família e amigos. Você vai amar apreciar o pôr do sol e conectar-se com a natureza.
        		</p></h3>

        		<h3><p>
        		A casa tem uma estrutura interna de 3 quartos com acomodações para 7 pessoas, 1 banheiro social, Sala de estar com Tv smart, sinal sky e video game Wii, Sala de jantar com mesa de 6 lugares. Varanda, piscina com cascata, cozinha externa c/ churrasqueira e um banheiro externo. Com wi-fi em toda casa.
        		</p></h3>

        		<h3><p>
        		Saiba sobre as <a href="#">regras da casa</a>.
        		</p></h3>

        			<div className="circle">
        				
        				<span><a href="#"> <img src="img/img1.jpg" /> </a></span>
        				<h2>Área Externa</h2>
        			</div>

        			<div className="circle">
        				
        				<span><a href="#"> <img src="img/img1.jpg" /> </a></span>
        				<h2>Área Interna</h2>
        			</div>

        			<div className="circle">
        				
        				<span><a href="#"> <img src="img/img1.jpg" /> </a></span>
        				<h2>Quartos</h2>
        			</div>

        		</div>

        		<div className="topics">
        			<h3>ITENS INCLUSOS
        			<hr />
        			</h3>
        			<i class="green large check circle outline icon"/><div className="icons">Piscina com cachoeira</div>
        			<i class="green large check circle outline icon"/><div className="icons">Churrasqueira</div>
        			<i class="green large check circle outline icon"/><div className="icons">Cozinha completa</div>
        			<i class="green large check circle outline icon"/><div className="icons">Toalhas e roupa de cama</div>
        			<i class="green large check circle outline icon"/><div className="icons">Wifi Free</div>
        			<i class="green large check circle outline icon"/><div className="icons">TV Smart com Sky</div>
        			<i class="green large check circle outline icon"/><div className="icons">Video Game Wii com Jogos</div>
        			<i class="green large check circle outline icon"/><div className="icons">Rede e bola de vôlei</div>
        			<i class="green large check circle outline icon"/><div className="icons">Jogos de tabuleiro/Cartas</div>
        			<i class="green large check circle outline icon"/><div className="icons">Duas vagas de garagem</div>
        			<i class="green large check circle outline icon"/><div className="icons">Não cobramos taxa PET</div>
        		</div>

        		<div className="GalleryVideos">
        			<hr />
        			<h2> Tour Virtual </h2>
        			<span><iframe width="560" height="315" src="https://www.youtube.com/embed/94YA4eNpw2g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span>


        		</div>

        		

        	</div>
        </div>
    );
  }
}

export default About;