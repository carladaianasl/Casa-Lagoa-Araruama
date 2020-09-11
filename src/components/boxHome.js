import React, { Component } from 'react';

const BoxHome = (props) =>{
	return(
		<div className="boxes">
	        <img src={props.img} width="100"/>
	        <h4 className="boxesTitulo">{props.title}</h4>
	        <h5 className="boxesTexto">{props.content}
	        <span><p>{props.subContent}</p></span></h5>
	    </div>
	);
};

export default BoxHome;
