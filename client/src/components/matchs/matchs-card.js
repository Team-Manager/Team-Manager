import React from 'react'
import Col from 'react-bootstrap/Col'
import { Button, Form, Modal } from 'react-bootstrap'
import MatchsEdit from '../matchs/match-edit'

// import { Link } from 'react-router-dom'

class MatchsCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showModalWindow: false

        }
    }
   

    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })
    render() {

        return (
            <Col className="match-card" md={3}>
                <p><small>Jugadores: </small>{this.props.category}</p>
                <p><small>Goals: </small>{this.props.goals}</p>
                <p><small>Asistencias: </small>{this.props.assists}</p>
                <p><small>Rating: </small>{this.props.rating}</p>
                <p><small>Clasificación: </small>{this.props.clasification}</p>
                <p><small>Minutos jugados: </small>{this.props.minutePlays}</p>
                <br></br>
                {/* boton editar jugador  */}
                <Button variant="dark" onClick={this.handleShow}>Editar partido</Button>    
                {/* boton borrar jugador */}
                <Button variant="dark" onClick={() => this.props.deleteMatch(this.props._id)}>Eliminar partido</Button>

               

                <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar partido</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <MatchsEdit match={this.props} updateMatchsList={this.props.updateMatchsList} closeModalWindow={this.handleClose} />
                        {/* <deletePlayerplayer={this.props} updatePlayersList={this.props.updatePlayersList} closeModalWindow={this.handleClose} /> */}
                    </Modal.Body>
                </Modal>



            </Col>

        )
    }

}


export default MatchsCard
