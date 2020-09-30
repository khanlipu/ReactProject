import React, {Component, Fragment} from 'react';
import {Button, Card, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from "../../asset/image/navlogoScroll.svg";
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";


class TopNavigation extends Component {

    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarBg:"navBg",
            navItem:"navMenuItem",
            navVariant:"dark",
            pageTitle: props.title

        }
    }

    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({
                navBarTitle:'navTitleScroll',
                navBarLogo:[blueLogo],
                navVariant:'light',
                navBarBg:"navBgScroll",
                navItem:"navMenuItemScroll"})
        }
        else if (window.scrollY<100){
            this.setState({
                navBarTitle:'navTitle',
                navBarLogo:[whiteLogo],
                navVariant:'dark',
                navBarBg:"navBg",
                navItem:"navMenuItem"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                    <Navbar variant={this.state.navVariant} fixed="top" bg="0" className={this.state.navBarBg} expand="lg">
                        <Navbar.Brand className={this.state.navBarTitle}><img src={this.state.navBarLogo}/> Khan Nazrul Islam</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/">Home</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/service">Services</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/course">Courses</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/portfolio">Portfolio</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/contact">Contact</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="about">About</NavLink></Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
            </Fragment>
        );
    }
}
export default TopNavigation;
