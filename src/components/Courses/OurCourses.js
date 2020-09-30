import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class OurCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className='servicesMainTitle'>OUR COURSES</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12} style={{marginTop:"2rem"}}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a href="#" className="courseLink float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} style={{marginTop:"2rem"}}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a href="#" className="courseLink float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} style={{marginTop:"2rem"}}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a href="#" className="courseLink float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} style={{marginTop:"2rem"}}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a href="#" className="courseLink float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default OurCourses;
