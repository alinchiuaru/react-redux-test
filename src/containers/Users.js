import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar';
import CourseThumbnail from '../components/CourseThumbnail';

export default class Users extends Component {
    renderCourseThumbnails() {
        const coursesArray = [];
        for ( let i = 1; i < 8; i++ ) {
            coursesArray.push( <CourseThumbnail key={i} description={`This is a default description for the course ( ${i} )`} /> );
        }

        return coursesArray;
    }
    render() {
        return (
            <div>
                <HeaderBar/>
                    <div class="container-fluid">
                        <h2 class="text-display-2">My Courses</h2>
                        <div class="row">
                            {this.renderCourseThumbnails()}
                        </div>
                    </div>
            </div>
        );
    }
}