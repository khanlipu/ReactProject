import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TobNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import OurCourses from "../components/Courses/OurCourses";
import Video from "../components/Video/Video";
import ClientsReview from "../components/ClientsReview/ClientsReview";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home"/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProjects/>
                <OurCourses/>
                <Video/>
                <ClientsReview/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;
