import React from 'react';

class Card extends React.Component {
	render() {
		return(
			<div className="card">
				<h2>{this.props.title}</h2>
				<div className="line" style={{backgroundColor: this.props.bgc}}></div>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

class Link extends React.Component {
	render() {
		return(
			<a href={this.props.href}>{this.props.text}</a>
		)
	}
}

export default Card;