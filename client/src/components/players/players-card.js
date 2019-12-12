import React from 'react'
import Col from 'react-bootstrap/Col'
import { Button, Form, Modal } from 'react-bootstrap'
import PlayerEdit from '../players/player-edit'

// import { Link } from 'react-router-dom'

class PlayersCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showModalWindow: false

        }
    }
    // handleSubmit = e => {
    //     e.preventDefault()
    //     this._playersService.postPlayers(this.state.player)

    //         .then(x => {
    //             this.props.closeModalWindow()
    //             this.props.updatePlayersList()
    //         })
    //         .catch(err => console.log(err))
    // }

    // handleInputChange = e => {
    //     let { name, value } = e.target
    //     this.setState({
    //         player: { ...this.state.player, [name]: value }
    //     })
    // }

    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })
    render() {
        console.log(this.state)

        return (
            <Col className="player-card" md={3}>
                <p><small>Nombre: </small>{this.props.name}</p>
                <p><small>Apellido: </small>{this.props.lastName}</p>
                <p><small>Nacionalidad: </small>{this.props.nacionality}</p>
                <p><small>Edad: </small>{this.props.age}</p>
                <p><small>Peso: </small>{this.props.weight}<small>Kg</small></p>
                <p><small>Categoría: </small>{this.props.category}</p>
                <p><small>Posición: </small>{this.props.position}</p>
                <p><small>Pierna Dominante: </small>{this.props.dominantLeg}</p>
                <p><small>Habilidades Técnicas: </small>{this.props.skills}</p>
                <br></br>
                {/* boton editar jugador  */}
                <Button variant="dark" onClick={this.handleShow}>Editar jugador</Button>
                {/* boton borrar jugador */}
                <Button variant="dark" onClick={() => this.props.deletePlayer(this.props._id)}>Eliminar jugador</Button>

                {/* <Link className="btn btn-sm btn-dark" to={`/players/${_id }`}>Ver detalles</Link> */}
                {/* <PlayerEdit player={props}></PlayerEdit> */}

                <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar jugador</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PlayerEdit player={this.props} updatePlayersList={this.props.updatePlayersList} closeModalWindow={this.handleClose} />
                        {/* <deletePlayerplayer={this.props} updatePlayersList={this.props.updatePlayersList} closeModalWindow={this.handleClose} /> */}
                    </Modal.Body>
                </Modal>



            </Col>

        )
    }

}


export default PlayersCard
