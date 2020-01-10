import React from 'react'
export default class ListTeams

    extends React.Component {

    render() {
        const fontSize = {
            fontSize: 15
        }
        return (
            <div>
                <div className='row'>
                    <div className='col-2 align-self-center text-left'>
                        <img src={this.props.teams.strTeamBadge} alt={this.props.teams.strTeam} className='img-thumbnail'></img>
                    </div>
                    <h5 className='align-self-center' style={fontSize}>
                        {this.props.teams.strTeam}
                    </h5>
                </div>
            </div>
        )
    }
}