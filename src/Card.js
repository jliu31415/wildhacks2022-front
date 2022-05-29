import React from 'react';
import './Card.css';
import TextBox from './TextBox';

class Card extends React.Component {
	render() {
		return(
            <div>
                <div className="card">
                    <h2>{this.props.title}</h2>
                    <div className="line" style={{backgroundColor: this.props.bgc}}></div>
                    <p>{this.props.description}</p>
                    <p>{this.props.content}</p>
                </div>
                <TextBox/>
            </div>
		)
	}
}

export default Card;