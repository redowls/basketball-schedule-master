import React from 'react'
import $ from 'jquery'

import ListEventsDetail from '../compornets/ListEventsDetail'

import { Container, Button, Card } from 'react-bootstrap';

class EventDetail extends React.Component {
    state = {
        eventDetail: undefined,
        params: "",
        loading: true
    }
    componentDidMount() {
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=' + this.props.match.params.id)
            .then(res => res.json())
            .then(data => {
                if (data.events) {
                    this.setState({
                        eventDetail: data.events[0],
                        loading: false
                    })
                    var string = this.state.eventDetail.dateEventLocal + ' ' + this.state.eventDetail.strTimeLocal
                    // if (string != "") {
                    $('#date').text(new Date(string.slice(0, -2) + 'UTC-5').toString().slice(0, -30))
                    if (this.state.eventDetail.strTimeLocal == null) {
                        $('#date').text("Detail")
                    }
                    this.render()
                } else {
                    this.setState({
                        eventDetail: undefined
                    })
                }
            })
    }
    seeYoutube() {
        var url = "https://google.com/search?btnI=1&q=" + this.state.eventDetail.strEvent + "+" + this.state.eventDetail.dateEvent.slice(0, 4) + "+youtube+highlights"
        window.location = url
    }
    render() {
        const eventDetail = this.state.eventDetail
        const title = {
            display: 'block',
            backgroundColor: 'rgb(38, 38, 38)',
            color: 'white',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 15,
            marginBottom: 20
        }
        return (
            <div>
                <Container>
                    <div style={title}>
                        <h5>Match Detail</h5>
                    </div>
                    {
                        this.state.loading ?
                            <p>Fetching From API</p> :
                            <Card className="text-center">
                                <Card.Header as="h5" id="date">Match Detail</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <ListEventsDetail events={eventDetail} />
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Button onClick={() => this.seeYoutube()} className="btn btn-md" variant="danger">
                                        Watch Recap on Youtube
                                   </Button>
                                </Card.Footer>
                            </Card>
                    }
                </Container>
            </div>
        )
    }
}

export default EventDetail