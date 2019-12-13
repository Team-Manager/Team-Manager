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
                // soccer: this.props.match.soccer,
                // result: this.props.match.result,
                // workingDay: this.props.match.workingDay,
                goals: this.props.match.goals,
                clasification: this.props.match.clasification,
                match: this.props.match.match,
                result: this.props.match.result,
                season: this.props.match.season,
                // players: this.props.match.players,
               

            }
        }
    }



    handleSubmit = e => {
        e.preventDefault()

        this._service.MatchEdit(this.state.match, this.props.match._id)
            .then(theEditedMatch => {
                this.setState({ goals: '', clasification: '', match: '', result: '', season: '' }, () => this.props.updateMatchsList(theEditedMatch.data))
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
                    <Form.Label>Clasificación</Form.Label>
                    <Form.Control type="number" name="clasification" onChange={this.handleInputChange} value={this.state.match.clasification} />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Partido</Form.Label>
                    <Form.Control type="text" name="match" onChange={this.handleInputChange} value={this.state.match.match} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Resultado</Form.Label>
                    <Form.Control type="number" name="result" onChange={this.handleInputChange} value={this.state.match.result} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Temporada</Form.Label>
                    <Form.Control type="number" name="season" onChange={this.handleInputChange} value={this.state.match.season} />
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label>Partido</Form.Label>
                    <Form.Control type="string" name="soccer" onChange={this.handleInputChange} value={this.state.match.soccer} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Clasificación</Form.Label>
                    <Form.Control type="number" name="clasification" onChange={this.handleInputChange} value={this.state.match.clasification} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Minutos Jugados</Form.Label>
                    <Form.Control type="number" name="minutePlays" onChange={this.handleInputChange} value={this.state.match.minutePlays} />
                </Form.Group> */}
              
                <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>{this.state.buttonText}</Button>
            </Form>
        )
    }
}
export default MatchsEdit
