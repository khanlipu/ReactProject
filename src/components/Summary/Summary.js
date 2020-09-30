import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";



class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container className="summaryBanner p-0 summarySection" fluid={true}>
                    <div className="summaryBannerOverlay"></div>
                    <Container className="text-center">
                        <Row>
                            <Col lg={8} md={6} sm={12}>
                                <Row className="countSection">
                                    <Col>
                                        <h1 className="countNumber">
                                            <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (

                                                            <span ref={countUpRef} />

                                                )}
                                            </CountUp>
                                        </h1>
                                        <h4 className="countTitle">Total Projects</h4>
                                        <hr className="w-25 bg-white"/>
                                    </Col>
                                    <Col>
                                        <h1 className="countNumber">100</h1>
                                        <h4 className="countTitle">Total Clients</h4>
                                        <hr className="w-25 bg-white"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="text-left" lg={4} md={6} sm={12}>
                                <Card className="cardSection">
                                    <Card.Body>
                                        <Card.Title className="cardTitle">How I work</Card.Title>
                                        <Card.Text>
                                            <p className="cardSubTitle"> <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirement Gathering</p>
                                            <p className="cardSubTitle"> <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> System Analysis</p>
                                            <p className="cardSubTitle"> <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coding Testing</p>
                                            <p className="cardSubTitle"> <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Implementation</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;
