import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className='servicesMainTitle'>RECENT PROJECTS</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg" />
                                <Card.Body>
                                    <Card.Title className="projectTitle">Card Title</Card.Title>
                                    <Card.Text className="projectDescription">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <hr className="w-auto bg-white"/>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                        <Card className="projectCard">
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg" />
                            <Card.Body>
                                <Card.Title className="projectTitle">Card Title</Card.Title>
                                <Card.Text className="projectDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <hr className="w-auto bg-white"/>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                        <Card className="projectCard">
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg" />
                            <Card.Body>
                                <Card.Title className="projectTitle">Card Title</Card.Title>
                                <Card.Text className="projectDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <hr className="w-auto bg-white"/>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;
