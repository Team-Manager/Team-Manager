import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import playersService from '../../service/Players.service'
//EDITAR ESTA PARTE

class MatchPlayers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
            buttonText: 'Editar información'

            player: {

                name: this.props.player.name,
                lastName: this.props.player.lastName,
                goals: this.props.player.goals,
                assists: this.props.player.assists,
                minutePlays: this.props.player.minutePlays,
                card: this.props.player.card,
               
            }

        }

    }


    handleSubmit = e => {
        e.preventDefault()

        this._service.PlayerEdit(this.state.player, this.props.player._id)
            .then(theEditedPlayer => {
                console.log(theEditedPlayer)
                this.setState({ lastName: '', number: '', nacionality: '', age: '', weight: '', category: '', position: '', skills: '', dominantLeg: '' }, () => this.props.updatePlayersList(theEditedPlayer.data))
                this.props.closeModalWindow()
                this.props.history.push('/player')
            })

            .catch(err => console.log(err))
    }






    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            player: { ...this.state.player, [name]: value }
        })
    }




    render() {

        return (
               
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control type="text" name="name" onChange={this.handleInputChange} value={this.state.player.name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido: </Form.Label>
                    <Form.Control type="text" name="lastName" onChange={this.handleInputChange} value={this.state.player.lastName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Goles: </Form.Label>
                    <Form.Control type="number" name="goals" onChange={this.handleInputChange} value={this.state.player.goals} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Asistencias: </Form.Label>
                    <Form.Control type="number" name="assists" onChange={this.handleInputChange} value={this.state.player.assists} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Minutos Jugados: </Form.Label>
                    <Form.Control type="number" name="minutePlays" onChange={this.handleInputChange} value={this.state.player.minutePlays} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tarjetas: </Form.Label>
                    <Form.Control type="text" name="card" onChange={this.handleInputChange} value={this.state.player.card} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Puntuación: </Form.Label>
                    <Form.Control type="number" name="rating" onChange={this.handleInputChange} value={this.state.player.rating}>
                </Form.Group>        
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="titular" value={this.state.checked} name={this.props._id} onChange={(e) => this.props.handleCheckBox(e.target.checked, this.props._id)} />
                    </Form.Group>
                    <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>{this.state.buttonText}</Button>
              
            </Form>


        
        
        
        
        
        
        
        
        


        
        
        

        
        
            {/* // <Col className="PlayerCard" md={2} >

                  <p><strong>Nombre: </strong>{this.props.name}</p>
                  <p><strong>Apellido:</strong>{this.props.lastName}</p>
                  <p><strong>Goles: </strong> {this.props.goals}</p>
                  <p><strong>Asistencias: </strong> {this.props.assists}</p>
                  <p><strong>Asistencias: </strong> {this.props.assists}</p>
                  <p><strong>Minutos Jugados: </strong> {this.props.minutePlays}</p>
                  <p><strong>Tarjetas: </strong> {this.props.cards}</p>
                  <p><strong>Puntuación: </strong> {this.props.rating}</p>
                  <div> */}
                    {/* <InputGroup className="mb-3">
                        <p><strong>Añadir al partido: </strong></p>
                    <InputGroup.Checkbox aria-label={this.props.titular} /> */}
                    {/* <div>
                        <Button className="ButtonsMatch" variant="dark" onClick={this.handleShow}>Editar jugador</Button>
                    </div>     */}
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="titular" value={this.state.checked} name={this.props._id} onChange={(e) => this.props.handleCheckBox(e.target.checked, this.props._id)} />
                    </Form.Group>


                    {/* <input type="checkbox" label="titular" value={this.props.checked} name={this.props.name} onChange={this.handleCheckBox}></input> */}

                </div>

            </Col>

        )
    }

}

export default MatchPlayers

