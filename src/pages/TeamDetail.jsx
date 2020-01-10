import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import { Image, Container, Card } from 'react-bootstrap';

import facebook from '../image/facebook.jpg'
import twitter from '../image/twitter.jpg'
import instagram from '../image/instagram.jpg'
import youtube from '../image/youtube.jpg'

class TeamDetail extends React.Component {
    state = {
        params: "",
        teamDetail: undefined,
        loading: true
    }
    componentDidMount() {
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + this.props.match.params.id)
            .then(res => res.json())
            .then(data => {
                if (data.teams) {
                    this.setState({
                        teamDetail: data.teams[0],
                        loading: false
                    })
                    this.render()
                } else {
                    this.setState({
                        teamDetail: undefined
                    })
                }
            })
    }
    render() {
        const header = {
            display: 'flex',
            flexDirection: 'row',
            flexDirection: 'row',
            justifyContent: 'center',
        }
        const image = {
            height: 120,
            width: 120,
        }
        const description = {
            textAlign: 'justify'
        }
        const title = {
            display: 'block',
            backgroundColor: 'rgb(38, 38, 38)',
            color: 'white',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 15,
            marginBottom: 15
        }
        const socmed = {
            width: 30,
            height: 30,
            margin: 10
        }
        const footer = {
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row'
        }
        const card = {
            marginBottom: 30
        }
        return (
            this.state.loading ?
                <Container><p>Fetching From API</p></Container> :
                <div>
                    <Container>
                        <div style={title}>
                            <h5>Team Detail</h5>
                        </div>
                        <Card className="text-center" style={card}>
                            <Card.Header >
                                <div style={header}>
                                    <Image style={image} fluid src={this.state.teamDetail.strTeamBadge} className="img-thumbnail" alt={this.state.teamDetail.strTeam}></Image>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{this.state.teamDetail.strTeam}</Card.Title>
                                <Card.Text style={description}>
                                    {this.state.teamDetail.strDescriptionEN}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <div style={footer}>
                                    <a href={'https://' + this.state.teamDetail.strFacebook} target="_blank" rel="noopener noreferrer">
                                        <img style={socmed} src={facebook} alt="facebook" />
                                    </a>
                                    <a href={'https://' + this.state.teamDetail.strTwitter} target="_blank" rel="noopener noreferrer">
                                        <img style={socmed} src={twitter} alt="Twitter" />
                                    </a>
                                    <a href={'https://' + this.state.teamDetail.strInstagram} target="_blank" rel="noopener noreferrer">
                                        <img style={socmed} src={instagram} alt="instagram" />
                                    </a>
                                    <a href={'https://' + this.state.teamDetail.strYoutube} target="_blank" rel="noopener noreferrer">
                                        <img style={socmed} src={youtube} alt="youtube" />
                                    </a>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Container>
                </div >
        )
    }
}

export default TeamDetail