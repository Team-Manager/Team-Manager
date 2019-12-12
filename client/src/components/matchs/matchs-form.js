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
                goals: '',
                assists: '',
                rating: '',
                clasification: '',
                minutePlays: '',
                players: []

            }
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        this._matchsService.postMatchs(this.state.match)

            .then(x => {
                this.props.closeModalWindow()
                this.props.updateMatchsList()
            })
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            match: { ...this.state.match, [name]: value }
        })
    }
    //PREGUNTAR A RALU POR SI PUDIERAMOS METER IMAGEN!!!!!!!!!!!!!!!
    // handleFileUpload = e => {
    //     this.setState({ disabledButton: true, buttonText: 'Subiendo imagen...' })
    //     const uploadData = new FormData()
    //     uploadData.append("imageUrl", e.target.files[0])
    //     this._filesService.handleUpload(uploadData)
    //         .then(response => {
    //             console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
    //             this.setState({
    //                 disabledButton: false,
    //                 buttonText: 'Crear montaña rusa',
    //                 coaster: { ...this.state.coaster, imageUrl: response.data.secure_url }
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }
    render() {
        return (
            // FORMULARIO PARA EL JUGADOR
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
                <Form.Group>
                    <Form.Label>Jugadores</Form.Label>
                    <Form.Control as="select" type="text" name="category" onChange={this.handleInputChange} value={this.state.match.players}>
                        <option>Alevin</option>
                        <option>Infantil</option>
                        <option>Cadete</option>
                        <option>Juvenil</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>{this.state.buttonText}</Button>
            </Form>
        )
    }
}
export default MatchsForm