import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class ClientsReview extends Component {
    render() {
        var settings = {
            autoPlay:true,
            autoplaySpeed: true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className='servicesMainTitle'>CLIENTS SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="clientImgCircle" src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg"/>
                                    <h2 className="clientTitle">Web Developer</h2>
                                    <p className="clientDes">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="clientImgCircle" src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg"/>
                                    <h2 className="clientTitle">React Developer</h2>
                                    <p className="clientDes">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="clientImgCircle" src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg"/>
                                    <h2 className="clientTitle">ReactNative Developer</h2>
                                    <p className="clientDes">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientsReview;
