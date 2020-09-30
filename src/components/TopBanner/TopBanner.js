import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";


class TopBanner extends Component {
    render() {
        return (
            <Fragment >
                <Container className="topBannerImg p-0" fluid={true}>
                <div className="topBannerOverlay"></div>
                        <Container className="topContent">
                            <Row>
                                <Col className='text-center'>
                                    <h1 className='topTitle'>Web Developer</h1>
                                    <h4 className="topSubTitle">I am learning react.js and this is for practice </h4>
                                    <Button variant="primary">Primary</Button>
                                </Col>
                            </Row>
                        </Container>
                </Container>

            </Fragment>
        );
    }
}

export default TopBanner;
