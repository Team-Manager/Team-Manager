import React from 'react'
import Col from 'react-bootstrap/Col'
import { Button, Modal } from 'react-bootstrap'
import PlayerEdit from '../players/player-edit'
// import { Link } from 'react-router-dom'



class PlayersCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showModalWindow: false
            
        }
    }
    
    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })
    render() {
        console.log(this.state)
        
        return (
                        
            <div md={4}>
                <div className="PlayerCard2">
                    <p>Nombre: {this.props.name}</p>
                    <p>Apellido: {this.props.lastName}</p>
                    <p>Número: {this.props.number}</p>
                    <p>Nacionalidad: {this.props.nacionality}</p>
                    <p>Edad: {this.props.age}</p>
                    <p>Peso: {this.props.weight}<small>Kg</small></p>
                    <p>Categoría: {this.props.category}</p>
                    <p>Posición: {this.props.position}</p>
                    <p>Pierna Dominante: {this.props.dominantLeg}</p>
                    <p>Habilidades Técnicas: {this.props.skills}</p>
                </div>
                
                <div className="Buttons">
                    <Button className="ButtonsPl" variant="dark" onClick={this.handleShow}>Editar jugador</Button>
                    <Button className="ButtonsPl" variant="dark" onClick={() => this.props.deletePlayer(this.props._id)}>Eliminar jugador</Button>
                </div>
               
             
                <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar jugador</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PlayerEdit player={this.props} updatePlayersList={this.props.updatePlayersList} closeModalWindow={this.handleClose} />
                    </Modal.Body>
                    </Modal>
            </div>


            

        )
    }

}


export default PlayersCard
