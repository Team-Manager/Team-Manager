import React from 'react'
import Service from '../../service/Match.service'

import { Container, Row, Button, Modal } from 'react-bootstrap'

import MatchsCard from './matchs-card'
import MatchsForm from './matchs-form'
import MatchsEdit from './match-edit'


class MatchsList extends React.Component {
    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            matchs: [],
            showModalWindow: false
        }
    }
    deleteMatchHandler = id => {

        this._service.deleteMatch(id)
            .then(match => console.log(match))
            .catch(err => console.log("Error", err))
        this.updateMatchsList()
    }

    componentDidMount = () => this.updateMatchsList()
    updateMatchsList = () => {
        this._service.getAllMatchs()
            .then(allMatchsFromDB => this.setState({ matchs: allMatchsFromDB.data }))
            .catch(err => console.log("Error", err))
    }
    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })
    render() {

        return (
            <section className="secMatchList">
                <Container>
                    <h1>¡Nuestros partidos!</h1>

                    {
                        this.props.loggedInUser && <Button variant="dark" onClick={this.handleShow}>Nuevo partido</Button>

                    }
                    <Row>
                        {this.state.matchs.map((match, idx) => <MatchsCard key={match._id} {...match} updateMatchsList={this.updateMatchsList} deleteMatch={this.deleteMatchHandler} />)}

                    </Row>
                </Container>
                    <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo partido</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <MatchsForm match={this.props.history} closeModalWindow={this.handleClose} updateMatchsList={this.updateMatchsList} />
                    </Modal.Body>
                </Modal>

            </section>
        )
    }
}
export default MatchsList
