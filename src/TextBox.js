import React from 'react';
import './TextBox.css';

class TextBox extends React.Component {

    constructor(props) {
        super(props);        
        this.state = {value: "Please leave a review"};
        this.handleChange = this.handleChange.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert("An review was submitted: " + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (            
            <form className='userInput' onSubmit={this.handleSubmit}>            
                <label>           
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default TextBox;