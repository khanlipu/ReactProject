import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class TopPage extends Component {
    render() {
        return (
            <Fragment>
                <Container className="topPageImage p-0" fluid={true}>
                    <div className="topPageOverlay"></div>
                    <Container className="topContent">
                        <Row>
                            <Col className='text-center'>
                                <h1 className='topPageTitle'>{this.props.pagetitle}</h1>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default TopPage;
