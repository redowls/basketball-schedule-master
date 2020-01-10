import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import $ from 'jquery'

import Iframe from 'react-iframe'

import MediaQuery from 'react-responsive'

class AboutUs extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        alert('Thankyou ' + $('#name').val() + ' for your feedback :)')
        $('form').trigger("reset");
        $('form').trigger("change")
        window.location = '/'
    }
    render() {
        const center = {
            textAlign: 'center',
        }
        const feedback = {
            border: '1px solid lightGray',
            borderRadius: 5,
            padding: '3%',
            paddingBottom: '2%',
            marginBottom: 30
        }
        const right = {
            textAlign: 'right'
        }
        const text = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
        const bold = {
            fontWeight: 'bold'
        }
        const jumbotron = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }

        const temp={
            backgroundColor: 'red'
        }
        return (
            <Container>
                <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark" style={jumbotron}>
                    <div>
                        <Row>
                            <Col sm={12} lg={5}>
                                <MediaQuery minWidth={1200}>
                                    <Iframe url="https://www.youtube.com/embed/8xOwS2mP4yg"
                                        width="100%"
                                        height='233px'
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        frameBorder="0"
                                    />
                                </MediaQuery>
                                <MediaQuery minWidth={992} maxWidth={1199}>
                                    <Iframe url="https://www.youtube.com/embed/8xOwS2mP4yg"
                                        width="100%"
                                        height='195px'
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        frameBorder="0"
                                    />
                                </MediaQuery>
                                <MediaQuery minWidth={535} maxWidth={991}>
                                    <Iframe url="https://www.youtube.com/embed/8xOwS2mP4yg"
                                        width="100%"
                                        height='280px'
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        frameBorder="0"
                                    />
                                    <div>
                                        <br/>
                                    </div>
                                </MediaQuery>
                                <MediaQuery minWidth={431} maxWidth={534}>
                                    <Iframe url="https://www.youtube.com/embed/8xOwS2mP4yg"
                                        width="100%"
                                        height='190px'
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        frameBorder="0"
                                    />
                                    <div>
                                        <br/>
                                    </div>
                                </MediaQuery>
                                <MediaQuery maxWidth={430}>
                                    <Iframe url="https://www.youtube.com/embed/8xOwS2mP4yg"
                                        width="100%"
                                        height='155px'
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        frameBorder="0"
                                    />
                                    <div>
                                        <br/>
                                    </div>
                                </MediaQuery>
                            </Col>
                            <Col lg={7}>
                                <MediaQuery maxDeviceWidth={1199}>
                                    <div style={text}>
                                        <div class="lead" style={text}>
                                            <p style={bold} class="mt-1">2019 Intro Video for the University of Memphis Men's Basketball Team</p>
                                            <p>Planet Rock by Afrika Bambaata & the Soulsonic Force, 1982, TommyBoy/WarnerBros Record</p>
                                            <p class="">Produced by Running Pony Productions</p>
                                        </div>
                                    </div>
                                </MediaQuery>
                                <MediaQuery minDeviceWidth={1200}>
                                    <div style={text}>
                                        <div class="lead" style={text}>
                                            <p style={bold} class="mt-4">2019 Intro Video for the University of Memphis Men's Basketball Team</p>
                                            <p>Planet Rock by Afrika Bambaata & the Soulsonic Force, 1982, TommyBoy/WarnerBros Record</p>
                                            <p class="">Produced by Running Pony Productions</p>
                                        </div>
                                    </div>
                                </MediaQuery>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={feedback}>
                    <Container>
                        <h5 style={center}>Your feedback helps us create a better experience for you.</h5>
                        <br></br>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="John Berry" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="john@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Title" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Feedback</Form.Label>
                                <Form.Control as="textarea" rows="5" placeholder="Write down your feedback!" />
                            </Form.Group>
                            <div style={right}>
                                <Button variant="dark" type="submit">
                                    Submit
                            </Button>
                            </div>
                        </Form>
                    </Container>
                </div>
            </Container>
        )
    }
}

export default AboutUs