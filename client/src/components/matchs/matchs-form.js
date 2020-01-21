import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

import MatchsService from '../../service/Match.service'

class MatchsForm extends Component {
    constructor(props) {
        super(props)
        this._matchsService = new MatchsService()
        this.state = {
            buttonText: 'Crear nuevo partido',
            match: {
                clasification: undefined,
                match: '',
                rival: '',
                goalsLocal: undefined,
                goalsRival: undefined,
                season: '',

                players: []

            }
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        this._matchsService.postMatchs(this.state.match)

            .then(x => {
                console.log(x.data)
                const matchID = x.data._id
                this.props.closeModalWindow()
                this.props.updateMatchsList()
                this.props.match.push(`/playersMatch/${matchID}`)
            })
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            match: { ...this.state.match, [name]: value }
        })
    }
    render() {

        return (
            // FORM FOR THE PLAYER
            <Form onSubmit={this.handleSubmit}>
<<<<<<< HEAD
=======
                {/* <Form.Group>
                    <Form.Label>Goles</Form.Label>
                    <Form.Control type="number" name="goals" onChange={this.handleInputChange} value={this.state.match.goals} />
                </Form.Group> */}

>>>>>>> ad233d43042ae1c596775f0fedd72b6553453a1e
                <Form.Group>
                    <Form.Label>Clasificación</Form.Label>
                    <Form.Control type="number" name="clasification" onChange={this.handleInputChange} value={this.state.match.clasification} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Equipo: </Form.Label>
                    <Form.Control type="text" name="match" onChange={this.handleInputChange} value={this.state.match.match} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Equipo Rival: </Form.Label>
                    <Form.Control type="text" name="rival" onChange={this.handleInputChange} value={this.state.match.rival} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>resultado a favor: </Form.Label>
                    <Form.Control type="number" name="goalsLocal" onChange={this.handleInputChange} value={this.state.match.goalsLocal} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Resultado en Contra: </Form.Label>
                    <Form.Control type="number" name="goalsRival" onChange={this.handleInputChange} value={this.state.match.goalsRival} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Temporada: </Form.Label>
                    <Form.Control type="number" name="season" onChange={this.handleInputChange} value={this.state.match.season} />
                </Form.Group>

                <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>{this.state.buttonText}</Button>
            </Form>
        )
    }
}
export default MatchsForm