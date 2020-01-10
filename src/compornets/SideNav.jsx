import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Form } from 'react-bootstrap';

import Select from 'react-select';

const options = [
    { value: '4387', label: 'NBA' },
    { value: '4516', label: 'WNBA' },
    { value: '4549', label: 'FIBA World Cup' },
    { value: '4388', label: 'NBA G League' },
    { value: '4547', label: 'Euro Cup Basketball' },
    { value: '4548', label: 'Basketball Champions League' }
];

export default class SideNav
    extends React.Component {
    
    state = {
        selectedOption: options[0]
    }

    componentDidMount(){
        for (let index = 0; index < options.length; index++) {
            if(this.props.idActive == options[index].value)
            this.setState({
                selectedOption : options[index]
            })
        }
    }

    handleChange = selectedOption => {
        window.location.href = '?id='+selectedOption.value
    }

    render() {
        const { selectedOption } = this.state
        const dropDown = {
            marginBottom: 15,
            width: 250
        }
        return (
            <div style={dropDown}>
                <Form.Label>Tournaments</Form.Label>
                <Select
                    className="dropDown"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
            </div>
        )
    }
}