import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TobNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";
import CourseDescription from "../components/CourseDescription";
import Footer from "../components/Footer/Footer";

class CoursePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course"/>
                <TopPage pagetitle="All Courses"/>
                <CourseDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursePage;
