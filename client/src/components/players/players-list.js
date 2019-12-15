import React from 'react'
import Service from '../../service/Players.service'

import { Container, Row, Button, Modal } from 'react-bootstrap'

import PlayersCard from './players-card'
import PlayersForm from './players-form'
// import PlayersEdit from './player-edit'


class PlayersList extends React.Component {
    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            players: [],
            // showModalWindow: false
        }
    }
    deletePlayerHandler = id => {
        
            this._service.deletePlayer(id)
            .then(player => console.log(player))
            .catch(err => console.log("Error", err))
             this.updatePlayersList()
    }

    componentDidMount = () => this.updatePlayersList()
    updatePlayersList = () => {
        this._service.getAllPlayers()
            .then(allPlayersFromDB => this.setState({ players: allPlayersFromDB.data }))
            .catch(err => console.log("Error", err))
    }
    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })
    render() {
     
        return (
            <section>
                <Container >
                      
               
                   
                    <h1>aqui los players!!!</h1>
                    
                    
                    {
                        this.props.loggedInUser && <Button variant="dark" onClick={this.handleShow}>Nuevo jugador</Button>

                    }
                    <Row >
                        {this.state.players.map((player, idx) => <PlayersCard key={player._id} {...player} updatePlayersList={this.updatePlayersList} deletePlayer={this.deletePlayerHandler} />)}
                        </Row>
                    </Container>
                <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo jugador</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PlayersForm closeModalWindow={this.handleClose} updatePlayersList={this.updatePlayersList} />
                    </Modal.Body>
                </Modal>
                         
            </section>
        )
    }
}
export default PlayersList
