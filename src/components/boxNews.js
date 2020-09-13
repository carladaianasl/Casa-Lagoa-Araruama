import React, { Component } from 'react';

const getPosition = (position) => {
	if (position == "left"){
		return "news";
	} else {
		return "news2";
	}

}

const BoxNews = (props) => {

	const actualPosition = getPosition(props.position);

	return(
		<div className={actualPosition} >
	       <a> <img src={props.img} /> </a>
	       <div className="content">
	       		<span className="newsTopic">{props.title}</span>
	       		<span className="newsText">{props.content}</span>
	       </div>
	    </div>
	);

};

export default BoxNews;

