// import React, { Component } from 'react'
// import { Button, Form } from 'react-bootstrap'

// import PlayersService from '../../service/Players.service'

// class PlayerFormMatch extends Component {
//     constructor(props) {
//         super(props)
//         this._service = new PlayersService()
//         // // this._filesService = new FilesService()
//         this.state = {
//             buttonText: 'editar partido',
//             // buttonText: 'eliminar jugador',
//             player: {

               
//                 goals: this.props.player.goals,
//                 asissts: this.props.player.assists,
//                 minutePlays: this.props.player.minutePlays,
//                 cards: this.props.player.cards,
//                 rating: this.props.player.rating

//             }
//         }
//     }



//     handleSubmit = e => {
//         e.preventDefault()

//         this._service.MatchEdit(this.state.match, this.props.match._id)
//             .then(theEditedPlayer => {
//                 console.log(theEditedPlayer.data)
//                 this.setState({  goals: '', assists: '', minutePlays: '', cards: '', rating: '' }, () => this.props.updateMatchsList(theEditedPlayer.data))
//                 this.props.closeModalWindow()
//                 this.props.history.push('/players')
//             })

//             .catch(err => console.log(err))
//     }






//     handleInputChange = e => {
//         let { name, value } = e.target
//         this.setState({
//             player: { ...this.state.player, [name]: value }
//         })
//     }

//     render() {
//         return (
//             <Form onSubmit={this.handleSubmit}>
//                 <Form.Group>
//                     <Form.Label>goles: </Form.Label>
//                     <Form.Control type="number" name="goals" onChange={this.handleInputChange} value={this.state.player.goals} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>asistencias: </Form.Label>
//                     <Form.Control type="number" name="assists" onChange={this.handleInputChange} value={this.state.player.assists} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>minutos jugados:</Form.Label>
//                     <Form.Control type="number" name="minutePlays" onChange={this.handleInputChange} value={this.state.player.minutePlays} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>tarjetas: </Form.Label>
//                     <Form.Control type="text" name="cards" onChange={this.handleInputChange} value={this.state.player.cards} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Puntuacion:</Form.Label>
//                     <Form.Control type="number" name="rating" onChange={this.handleInputChange} value={this.state.player.rating} />
//                 </Form.Group>

//                 <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>{this.state.buttonText}</Button>
//             </Form>
//         )
//     }
// }
// export default PlayerFormMatch
