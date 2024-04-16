import React from "react";
import CourseListRow from "./CourseListRow";
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from "./CourseShape";

function CourseList(props) {

    const { listCourses } = props;

    return (
        <>
        <div className="App-body">
            {listCourses.length === 0 ? (
            // Code to execute if listCourses is empty
            <table id="CourseList">
                <thead>
                    <CourseListRow textFirstCell="No course available yet" isHeader={true} /> 
                </thead>
            </table>
            ) : (
            // Code to execute if listCourses is not empty
            <table id="CourseList">
                <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.map(course => (
                    <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                ))}
            </tbody>
        </table>

            )}
        </div>
        </>
    );
}

CourseList.PropTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
    listCourses: []
};

export default CourseList;