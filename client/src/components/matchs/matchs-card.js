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
            <Col className="match-card">
                <p>Jugadores: {this.props.category}</p>
                <p>Goals: {this.props.goals}</p>
                <p>Clasificación: {this.props.clasification}</p>
                <p>Partido: {this.props.match}</p>
                <p>Resultado: {this.props.result}</p>
                <p>Season: {this.props.season}</p>
                <br></br>
                <div className="Buttons">
                <Button className="ButtonsPl" variant="dark" onClick={this.handleShow}>Editar partido</Button>    
                <Button className="ButtonsPl" variant="dark" onClick={() => this.props.deleteMatch(this.props._id)}>Eliminar partido</Button>
                </div>
               

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
