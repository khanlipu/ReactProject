import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TobNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact"/>
                <TopPage pagetitle="Contact"/>
                <ContactSection/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ContactPage;
