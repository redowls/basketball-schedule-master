import React from 'react'

import queryString from 'query-string'

import ListEvents from '../compornets/ListEvents'
import SideNav from '../compornets/SideNav'

import { Image, Container, Row, Col } from 'react-bootstrap';

import ads1 from '../image/ads-1.jpg'

import { StickyContainer, Sticky } from 'react-sticky';

import MediaQuery from 'react-responsive'

class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [],
            loading: true,
            params: 4387
        };
    }
    componentWillMount() {
        let paramsChange
        let url = this.props.location.search
        if (url) {
            paramsChange = queryString.parse(url)
            this.setState({
                params: paramsChange.id
            })
        }
    }
    componentDidMount() {
        fetch('https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=' + this.state.params)
            .then(res => res.json())
            .then(data => {
                if (data.events) {
                    this.setState({
                        events: data.events,
                        loading: false
                    })
                } else {
                    this.setState({
                        events: undefined
                    })
                }
            })
    }
    render() {
        const sideAds = {
            height: '100%',
            top: 50,
            textAlign: 'center',
        }
        const bottomAds = {
            height: '100%',
            top: 50,
            textAlign: 'center',
            marginTop: 20
        }
        const title = {
            backgroundColor: 'rgb(38, 38, 38)',
            color: 'white',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 15,
            marginBottom: 10
        }
        const line = {
            display: 'block',
            backgroundColor: 'rgb(38, 38, 38)',
            color: 'white',
            height: 5,
            marginBottom: 15
        }
        const bottom = {
            marginBottom: 30
        }
        if (!this.state.events) {
            return (
                <div>
                    <div className='text-left'>
                        <div className='content'>
                            <SideNav idActive={this.state.params}/>
                            <div className='text-left'>
                                No Events
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Container>
                        <div style={title}>
                            <h5>Match Results</h5>
                        </div>
                        <SideNav idActive={this.state.params} />
                        <div style={line}></div>
                        <Row style={bottom}>
                            <Col lg={7}>
                                {
                                    this.state.loading ? <p>Fetching From API</p> :
                                        this.state.events.map((event, index) => (
                                            <div key = {index}>
                                                <div className='list-group' key={index}>
                                                    <a href={`/EventDetail/${this.state.events[index].idEvent}`} className='list-group-item list-group-item-action'>
                                                        <ListEvents events={event} />
                                                    </a>
                                                </div>
                                            </div>
                                        ))
                                }
                            </Col>
                            <Col>
                                <MediaQuery maxDeviceWidth={991}>
                                    <StickyContainer style={bottomAds}>
                                        <Sticky>
                                            {({
                                                style,
                                                isSticky,
                                            }) => (
                                                    <Image src={ads1} style={{ ...style, marginTop: isSticky ? '20px' : '0px' }} fluid />
                                                )}
                                        </Sticky>
                                    </StickyContainer>
                                </MediaQuery>
                                <MediaQuery minDeviceWidth={992}>
                                    <StickyContainer style={sideAds}>
                                        <Sticky>
                                            {({
                                                style,
                                                isSticky,
                                                distanceFromTop,
                                            }) => (
                                                    <Image src={ads1} style={{ ...style, marginTop: isSticky ? '20px' : '0px' }} fluid />
                                                )}
                                        </Sticky>
                                    </StickyContainer>
                                </MediaQuery>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
}

export default Events