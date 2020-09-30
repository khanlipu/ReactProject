import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TobNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";
import AboutDescription from "../components/AboutDescreption/AboutDescription";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <TopPage pagetitle="About Me"/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;
