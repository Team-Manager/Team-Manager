import React, { Component } from 'react'
import { Col, Modal, Button, Form } from 'react-bootstrap'
import PlayersService from '../../service/Players.service'

class MatchPlayers extends Component {
    constructor(props) {
        super(props)
        this._service = new PlayersService()
        this.state = {
            showModalWindow: false,
            player:
            {
                goals: undefined,
                assists: undefined,
                minutePlays: undefined,
                cards: "",
                rating: undefined,
            }


        }

    }




    handleSubmit = e => {

        e.preventDefault()

        this._service
            .addPlayerToMatch(this.state.player, this.props._id, this.props.matchID)
            .then(theEditedPlayer => {
                console.log(theEditedPlayer)
                this.setState({
                    player: theEditedPlayer.data.performance,
                }, () => this.props.updateMatchsList())


                this.handleClose()
            })
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            player: { ...this.state.player, [name]: value }
        })
    }



    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })




    render() {
        console.log(this.props)
        return (



            <>
                <Col className="PlayerCard" md={2} >

                    <p><strong>Nombre: </strong>{this.props.name}</p>
                    <p><strong>Apellido:</strong>{this.props.lastName}</p>
                    <p><strong>Goles: </strong> {this.state.player.goals}</p>
                    <p><strong>Asistencias: </strong> {this.state.player.assists}</p>
                    <p><strong>Minutos Jugados: </strong> {this.state.player.minutePlays}</p>
                    <p><strong>Tarjetas: </strong> {this.state.player.cards}</p>
                    <p><strong>Puntuación: </strong> {this.state.player.rating}</p>

                    <div>
                        <Button className="Buttons" variant="dark" onClick={this.handleShow}>editar</Button>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Convocado" value={this.state.checked} name={this.props._id} onChange={(e) => this.props.handleCheckBox(e.target.checked, this.props._id)} />
                        </Form.Group>


                    </div>
                </Col>

                <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar partido</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group>
                                <Form.Label>goles: </Form.Label>
                                <Form.Control type="number" name="goals" onChange={this.handleInputChange} value={this.state.player.goals} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>asistencias: </Form.Label>
                                <Form.Control type="number" name="assists" onChange={this.handleInputChange} value={this.state.player.assists} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>minutos jugados:</Form.Label>
                                <Form.Control type="number" name="minutePlays" onChange={this.handleInputChange} value={this.state.player.minutePlays} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>tarjetas: </Form.Label>
                                <Form.Control type="text" name="cards" onChange={this.handleInputChange} value={this.state.player.cards} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Puntuacion:</Form.Label>
                                <Form.Control type="number" name="rating" onChange={this.handleInputChange} value={this.state.player.rating} />
                            </Form.Group>

                            <Button variant="dark" size="sm" type="submit" onClick={this.handleClose}>Información Del Jugador</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>






        )
    }

}

export default MatchPlayers

