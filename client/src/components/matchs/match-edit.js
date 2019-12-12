import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

import MatchsService from '../../service/Match.service'
// import FilesService from '../../service/Files.service'

class MatchsEdit extends Component {
    constructor(props) {
        super(props)
        this._service = new MatchsService()
        // // this._filesService = new FilesService()
        this.state = {
            buttonText: 'editar partido',
            // buttonText: 'eliminar jugador',
            match: {
                goals: this.props.match.goals,
                assists: this.props.match.assists,
                rating: this.props.match.rating,
                clasification: this.props.match.clasification,
                minutePlays: this.props.match.minutePlays,
                // players: this.props.match.players,
               

            }
        }
    }



    handleSubmit = e => {
        e.preventDefault()

        this._service.MatchEdit(this.state.match, this.props.match._id)
            .then(theEditedMatch => {
                this.setState({ goals: '', assists: '', rating: '', clasification: '', minutePlays: '' }, () => this.props.updateMatchsList(theEditedMatch.data))
                this.props.closeModalWindow()
                this.props.history.push('/match')
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
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Goles</Form.Label>
                    <Form.Control type="number" name="goals" onChange={this.handleInputChange} value={this.state.match.goals} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Asistencias</Form.Label>
                    <Form.Control type="number" name="assists" onChange={this.handleInputChange} value={this.state.match.assists} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Puntuación</Form.Label>
                    <Form.Control type="number" name="rating" onChange={this.handleInputChange} value={this.state.match.rating} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Clasificación</Form.Label>
                    <Form.Control type="number" name="clasification" onChange={this.handleInputChange} value={this.state.match.clasification} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Minutos Jugados</Form.Label>
                    <Form.Control type="number" name="minutePlays" onChange={this.handleInputChange} value={this.state.match.minutePlays} />
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label>Jugadores</Form.Label>
                    <Form.Control type="text" name="category" onChange={this.handleInputChange} value={this.state.match.players}>
                       
                    </Form.Control>
                </Form.Group> */}
                <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>{this.state.buttonText}</Button>
            </Form>
        )
    }
}
export default MatchsEdit
