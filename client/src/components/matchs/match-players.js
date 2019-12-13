// import React, { Component } from 'react'
// import playersService from '../../service/Players.service'
// import PlayersList from '../players/players-list'
// import { Container, Row} from 'react-bootstrap'
// import PlayersCard from '../players/players-card'


//                                          //EDITAR ESTA PARTE



// class MatchPlayers extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             players:[]
//         }
//         this._playersService = new playersService()
        


//     }

//     componentDidMount = () => {
//            this.updatePlayersList()
//     }
    
//     // updatePlayersList = () => {
//     //      const MatchPlayersId = this.props.match.params.id
//     //     this._MatchPlayersService.getAllPlayers(MatchPlayersId)
//     //         .then(allPlayersFromDB => this.setState({ MatchPlayers: allPlayersFromDB.data }))
//     //         .catch(err => console.log("Error", err))

//     //     }
//         render() {
//             return (
//                 <div>
//                  <>
//                         <PlayersList />
                        


//                         <Container>
//                             <h1>aqui los players!!!</h1>

        
//                             <Row>
//                                 {this.state.players.map((player, idx) => <PlayersCard key={player._id} {...player} updatePlayersList={this.updatePlayersList} deletePlayer={this.deletePlayerHandler} />)}

//                             </Row>

//                         </Container>
//                         {/* {this.state.players ?
//                             this.state.players.map(player =>
//                                 <p>{player.name}</p>

//                             ) :
//                             null}  */}
                            
//                     {/* NO OLVIDES PREGUNTAR A RALUCA POR LA LINEA 28 Y SI DEBO CREAR UN NUEVO CARD PARA EL PLAYER */}

//                     {/* <PlayerList player={this.props} updatePlayersList={this.props.updatePlayersList} />     */}
                
//                 {/* <article>
//                     <h4>Mis Jugadores</h4>
//                     <p>name: {name} </p>
//                     <p>apellido: {lastName}</p>
//                     <p>posicion:{position}</p>
//                     <p>goles:{goals}</p>
//                     <p>asistencias: {assists}</p>
//                     <p>amonestaciones: {amonestaciones}</p>
//                     <p>minutos jugados: {minutePlays}</p>

//                 </article> */}
//                </>
//                 </div>
//             )
//         }
    
// }    

// export default MatchPlayers

