import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

import PlayersService from '../../service/Players.service'
// import FilesService from '../../service/Files.service'

class PlayersEdit extends Component {
    constructor(props) {
        super(props)
        this._service = new PlayersService()
        // // this._filesService = new FilesService()
        this.state = {
            buttonText: 'editar jugador',

            player: {
                name: this.props.player.name,
                lastName: this.props.player.lastName,
                number: this.props.player.number,
                nacionality: this.props.player.nacionality,
                age: this.props.player.age,
                weight: this.props.player.weight,
                category: this.props.player.category,
                position: this.props.player.position,
                skills: this.props.player.skills,
                dominantLeg: this.props.player.dominantLeg,
            }

        }
    }



    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.player)
        this._service.PlayerEdit(this.state.player, this.props.player._id)
            .then(theEditedPlayer => {
                console.log(theEditedPlayer)
                this.props.updatePlayersList(theEditedPlayer.data)
                this.props.closeModalWindow()
                this.props.history.push('/player')
            })

            .catch(err => console.log(err))
    }






    handleInputChange = e => {
        let { name, value } = e.target
        console.log(typeof e.target.type)
        if (e.target.type === "number") {

            this.setState({
                player: { ...this.state.player, [name]: parseInt(value) }
            })
        }
        else {
            this.setState({
                player: { ...this.state.player, [name]: value }
            })
        }
        // console.log(typeof value)
    }

    render() {
        console.log(this.props)
        return (

            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={this.handleInputChange} value={this.state.player.name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>last Name</Form.Label>
                    <Form.Control type="text" name="lastName" onChange={this.handleInputChange} value={this.state.player.lastName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="number" name="number" onChange={this.handleInputChange} value={this.state.player.number} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nacionality</Form.Label>
                    <Form.Control type="text" name="nacionality" onChange={this.handleInputChange} value={this.state.player.nacionality} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" name="age" onChange={this.handleInputChange} value={this.state.player.age} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="number" name="weight" onChange={this.handleInputChange} value={this.state.player.weight} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" type="text" name="category" onChange={this.handleInputChange} value={this.state.player.category}>
                        <option></option>
                        <option>Alevin</option>
                        <option>Infantil</option>
                        <option>Cadete</option>
                        <option>Juvenil</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Position</Form.Label>
                    <Form.Control type="text" name="position" onChange={this.handleInputChange} value={this.state.player.position} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>pierna dominante</Form.Label>
                    <Form.Control as="select" type="text" name="dominantLeg" onChange={this.handleInputChange} value={this.state.player.dominantLeg} >
                        <option></option>
                        <option>derecha</option>
                        <option>izquierda</option>
                        <option>ambas piernas</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Skills</Form.Label>
                    <Form.Control type="text" name="skills" onChange={this.handleInputChange} value={this.state.player.skills} />
                </Form.Group>

                <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>{this.state.buttonText}</Button>

            </Form>

        )

    }
}
export default PlayersEdit



