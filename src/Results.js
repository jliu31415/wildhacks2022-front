import React, {Component} from 'react';
import './Results.css';
import Card from './Card.js';

const all_courses = require('./courses.json');
const result = require('./result.json');
const scrapedCourses = result.ctecs;

const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const filterCourses = (courses, query) => {
    if (!query) {
        return courses;
    }

    return courses.filter((course) => {
        const courseName = course.id.toLowerCase();
        return courseName.includes(query.toLowerCase());
    });
};
const filteredCourses = filterCourses(all_courses.courses, query);

class Results extends Component {
    constructor(props){
        super(props)
            
        // Set initial state
        this.state = {course: all_courses.courses.find(element => element.id === "COMP_SCI 111-0")}
            
        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }
     
    handleClick(courseID) {
        // Changing state
        this.setState({course : all_courses.courses.find(element => element.id === courseID)})
    }

    render() {
    return (
        <div className='results'>
            <div className='searchResults'>
                <ul>
                    {filteredCourses.map(course => (
                        <li onClick={this.handleClick.bind(this, course.id)}>
                            {course.id}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='courseInfo'>
                <Card title={this.state.course.id} bgc={'#ae63e4'} 
                    description={this.state.course.name + " (" + this.state.course.units + " units)"}
                    content={this.state.course.description}/>
                <div className='reviews'>
                    <h3>Student Reviews:</h3>
                    <ul>
                        {console.log(this.state.course.name)}
                        {console.log(scrapedCourses.find(element => element.course_name === this.state.course.name))}
                    </ul>
                </div>
            </div>
        </div>
        )
    }
};

export default Results;