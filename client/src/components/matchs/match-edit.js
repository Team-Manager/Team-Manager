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
               
                goalsTotal: this.props.match.goalsTotal,
                clasification: this.props.match.clasification,
                match: this.props.match.match,
                result: this.props.match.result,
                season: this.props.match.season,
                goalsLocal:this.props.match.goalsLocal,
                goalsRival:this.props.match.goalsRival,
                rival:this.props.match.rival,

              
               

            }
        }
    }



    handleSubmit = e => {
        e.preventDefault()

        this._service.MatchEdit(this.state.match, this.props.match._id)
            .then(theEditedMatch => {
                console.log(theEditedMatch.data )
                this.setState({ goalsTotal: '', clasification: '', match: '', result: '', season: '', goalsLocal: '', goalsRival: '', rival: ''   }, () => this.props.updateMatchsList(theEditedMatch.data))
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
                    <Form.Label>Goles totales</Form.Label>
                    <Form.Control type="number" name="goalsTotal" onChange={this.handleInputChange} value={this.state.match.goalsTotal} />
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
                <Form.Group>
                    <Form.Label>Goleslocales</Form.Label>
                    <Form.Control type="number" name="goalsLocal" onChange={this.handleInputChange} value={this.state.match.goalsLocal} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Goles rival</Form.Label>
                    <Form.Control type="number" name="goalsRival" onChange={this.handleInputChange} value={this.state.match.goalsRival} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Equipo rival</Form.Label>
                    <Form.Control type="number" name="rival" onChange={this.handleInputChange} value={this.state.match.rival} />
                </Form.Group>
              
                <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>{this.state.buttonText}</Button>
            </Form>
        )
    }
}
export default MatchsEdit
