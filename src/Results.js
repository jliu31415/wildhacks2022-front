import React, {Component} from 'react';
import './Results.css';
import Card from './Card.js';

const all_courses = require('./courses.json');
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
        this.state = {course: '', description: ''}
            
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
                        <li>It was good. It started slow so I thought I didn't need to pay attention at first but everything builds on the previous class so its important to really follow along and then things won't get too confusing.</li>
                        <br/><li>I really liked it, it was super fun. I liked that we didn't just do math programs but we worked with visualizations and things that we use daily to make the coding more fun and more relatable to real life.</li>
                        <br/><li>Learned what I wanted to, could've done a bit more with data analysis though</li>
                        <br/><li>Work is time consuming, and for me, it was difficult. Sara is a great professor and will help you if you ask for it though. Pay attention and follow lecture, it will save you.</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
};

export default Results;