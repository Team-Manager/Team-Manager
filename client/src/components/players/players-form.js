import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

import PlayersService from '../../service/Players.service'
// import FilesService from '../../service/Files.service'

class PlayersForm extends Component {
    constructor(props) {
        super(props)
        this._playersService = new PlayersService()
        // this._filesService = new FilesService()
        this.state = {
            buttonText: 'Crear nuevo jugador',
            player: {
                name: '',
                lastName: '',
                number: '',
                nacionality: '',
                age: '',
                weight: '',
                category: '',
                position: '',
                skills: '',
                dominantLeg: '',
               
                
            }
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        this._playersService.postPlayers(this.state.player)

            .then(x => {
                const playersID = x.data._id
                this.props.closeModalWindow()
                this.props.updatePlayersList()
                this.props.player.push(`/getAllPlayers${playersID}`)

            })
                .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            player: { ...this.state.player, [name]: value }
        })
    }
                                                                     //NO NECESARIO , NO TENEMOS IMAGEN!!!!!!!!!!!!!!!
    // handleFileUpload = e => {
    //     this.setState({ disabledButton: true, buttonText: 'Subiendo imagen...' })
    //     const uploadData = new FormData()
    //     uploadData.append("imageUrl", e.target.files[0])
    //     this._filesService.handleUpload(uploadData)
    //         .then(response => {
    //             console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
    //             this.setState({
    //                 disabledButton: false,
    //                 buttonText: 'Crear montaña rusa',
    //                 coaster: { ...this.state.coaster, imageUrl: response.data.secure_url }
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }
    render() {
        return (
            // FORMULARIO PARA EL JUGADOR

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
export default PlayersForm



