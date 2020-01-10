import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Image, Button, Container, Navbar } from 'react-bootstrap';

import {NavLink} from 'react-router-dom'

import logo from '../image/logo.png'
import banner from '../image/banner.jpg'

export default class MainNav

    extends React.Component {

    render() {

        const navBorder = {
            width: '100%',
        }
        const imageSize = {
            width: 75,
            height: 75,
            backgroundColor: 'black',
        }
        const imageBanner = {
            width: 'auto',
            marginBottom: 15
        }
        return (
            <Container>
                <header className="blog-header py-3" style={navBorder}>
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <Button variant="outline-dark">Subscribe</Button>
                        </div>
                        <div className="col-4 text-center">
                            <Image src={logo} style={imageSize} rounded />
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="text-muted" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                            </a>
                            <Button variant="outline-dark">Sign Up</Button>
                        </div>
                    </div>
                </header>
                <Navbar className="bg-light">
                    <Nav fill className="justify-content-center" style={navBorder}>
                        <Nav.Item>
                            <NavLink exact to="/"><h5>Events</h5></NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/Teams?id=4387"><h5>Teams</h5></NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/AboutUs"><h5>About Us</h5></NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar>
                <div style={imageBanner}>
                    <Image src={banner} fluid />
                </div>
            </Container>
        )
    }
}

