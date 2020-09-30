import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TobNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio"/>
                <TopPage pagetitle="Portfolio"/>
                <Portfolio/>
                <Footer/>

            </Fragment>
        );
    }
}

export default PortfolioPage;
