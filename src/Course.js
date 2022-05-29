import React from 'react'

class Course extends React.Component{
    constructor(props) {
        super(props);
        this.state={apiResponse:""};
    }

    callAPI() {
        fetch("http://localhost:8080/callAPI")
            .then(res => res.text())
            .then(res => this.setState({apiResponse:res}));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <p>{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default Course;