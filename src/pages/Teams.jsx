import React from 'react'

import queryString from 'query-string'

import SideNav from '../compornets/SideNav'
import ListTeams from '../compornets/ListTeams'

import { Container, Image, Row, Col } from 'react-bootstrap';

import ads1 from '../image/ads-1.jpg'

import { StickyContainer, Sticky } from 'react-sticky';

import MediaQuery from 'react-responsive'

export default class Teams
    extends React.Component {
    state = {
        teams: [],
        loading: true,
        params: 4387
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
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=' + this.state.params)
            .then(res => res.json())
            .then(data => {
                console.log('data' + data)
                if (data.teams) {
                    this.setState({
                        teams: data.teams,
                        loading: false
                    })
                } else {
                    this.setState({
                        teams: undefined
                    })
                }
            })
    }
    render() {
        const title = {
            display: 'block',
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
        const bottom = {
            marginBottom: 30
        }
        if (!this.state.teams) {
            return (
                <div>
                    <div className='container-fluid text-left'>
                        <div className='row content'>
                            <SideNav idActive={this.state.params} />
                            <div className='col-sm-10 text-left'>
                                No Teams
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Container>
                        <div>
                            <div style={title}>
                                <h5>Basketball Teams</h5>
                            </div>
                            <SideNav idActive={this.state.params} />
                            <div style={line}></div>
                            <Row style={bottom}>
                                <Col lg={7}>
                                    {
                                        this.state.loading ?
                                            <p>Fetching From API</p> :
                                            this.state.teams.map((team, index) => (
                                                <div className='list-group' key={index}>
                                                    <a href={`/TeamDetail/${this.state.teams[index].idTeam}`} className='list-group-item list-group-item-action'>
                                                        <ListTeams teams={team} />
                                                    </a>
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
                                                }) => (
                                                        <Image src={ads1} style={{ ...style, marginTop: isSticky ? '20px' : '0px' }} fluid />
                                                    )}
                                            </Sticky>
                                        </StickyContainer>
                                    </MediaQuery>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            )
        }
    }
}