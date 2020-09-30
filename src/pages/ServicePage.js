import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TobNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Service"/>
                <TopPage pagetitle="My Services"/>
                <ServiceSection/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;
