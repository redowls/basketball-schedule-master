import React from 'react'

import { Image, Row, Col } from 'react-bootstrap';

import MediaQuery from 'react-responsive'

export default class ListEvents extends React.Component {
    state = {
        homeImg: "",
        awayImg: ""
    }
    componentDidMount() {
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + this.props.events.strHomeTeam)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    homeImg: data.teams[0].strTeamBadge
                })
            })
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + this.props.events.strAwayTeam)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    awayImg: data.teams[0].strTeamBadge
                })
            })
    }
    render() {
        const temp = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // border: '1px solid black',
        }
        const awayTeamBig = {
            textAlign: 'right',
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
        }
        const homeTeamBig = {
            textAlign: 'left',
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
        }
        const awayTeamSmall = {
            flex: 1,
            textAlign: 'right',
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
        }
        const homeTeamSmall = {
            flex: 1,
            textAlign: 'left',
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
        }
        const rowMargin = {
            marginBottom: 10
        }
        return (
            <div>
                <Row style={rowMargin}>
                    <Col md={1} xs={0} style={temp}>
                    </Col>

                    <Col md={2} xs={3} style={temp}>
                        <Image src={this.state.homeImg} alt={this.props.events.strHomeTeam} fluid />
                    </Col>

                    <Col md={2} xs={2} style={temp}>
                        <h1>{this.props.events.intHomeScore}</h1>
                    </Col>

                    <Col md={2} xs={2} style={temp}>
                        <h1>-</h1>
                    </Col>

                    <Col md={2} xs={2} style={temp}>
                        <h1>{this.props.events.intAwayScore}</h1>
                    </Col>
                    <Col md={2} xs={3} style={temp}>
                        <Image src={this.state.awayImg} alt={this.props.events.strAwayTeam} fluid />
                    </Col>

                    <Col md={1} xs={0} style={temp}>
                    </Col>
                </Row>
                <Row>
                    <MediaQuery minWidth={768}>
                        <Col md={4} xs={5} style={temp}>
                            <p style={homeTeamBig}>
                                {this.props.events.strHomeTeam}
                            </p>
                        </Col>

                        <Col md={4} xs={2}>
                        </Col>

                        <Col md={4} xs={5} style={temp}>
                            <p style={awayTeamBig}>
                                {this.props.events.strAwayTeam}
                            </p>
                        </Col>
                    </MediaQuery>
                    <MediaQuery maxWidth={767}>
                        <Col md={4} xs={5} style={temp}>
                            <p style={homeTeamSmall}>
                                {this.props.events.strHomeTeam}
                            </p>
                        </Col>

                        <Col md={4} xs={2}>
                        </Col>

                        <Col md={4} xs={5} style={temp}>
                            <p style={awayTeamSmall}>
                                {this.props.events.strAwayTeam}
                            </p>
                        </Col>
                    </MediaQuery>
                </Row>
            </div>
        )
    }
}