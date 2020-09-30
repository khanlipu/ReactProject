import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone, faPlayCircle} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                          <h1 className="footerTitle">Follow Me</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="footerTitle">Address</h1>
                            <p className="footerText">Char Nazirpur, Nazirpur School, Muladi, Barisal</p>
                            <p className="footerText"><FontAwesomeIcon icon={faEnvelope} /> khanlipu@gmail.com</p>
                            <p className="footerText"><FontAwesomeIcon icon={faPhone} /> +601137414185</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="footerTitle">Information</h1>
                            <a className="footerLinkItem" href="#">About Me</a><br/>
                            <a className="footerLinkItem" href="#">Contact Me</a><br/>
                            <a className="footerLinkItem" href="#">My Resume</a>

                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="footerTitle">Legal</h1>
                            <a className="footerLinkItem" href="#">Refund Policy</a><br/>
                            <a className="footerLinkItem" href="#">Term And Conditio</a><br/>
                            <a className="footerLinkItem" href="#">Privecy Policy</a><br/>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyrightSection">
                    <a href="#" className="copyrightText">khannazrul.com &copy; 2020-2021</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;
