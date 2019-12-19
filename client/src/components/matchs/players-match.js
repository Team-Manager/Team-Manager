import React, { Component } from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Service from '../../service/PlayerMatch.service'

//NO OLVIDEMOS QUE PODEMOS IMPORTAR VARIOS SERVICIOS!!!!!!!!!!
import playersService from '../../service/Players.service'
import playerMatchService from '../../service/PlayerMatch.service'
import MatchPlayers from "../matchs/match-players"



class PlayersMatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PlayerMatch: undefined,
            players: [],
            checked: false,
            teamPlayers: []
        }
        this._playerMatchService = new playerMatchService()
        this._playersService = new playersService()

    }

    componentDidMount = () => {
        this.updateMatchsList()
        this.updatePlayersList()
    }

    updateMatchsList = () => {
        const playerMatchId = this.props.match.params.id
        this._playerMatchService.getOneMatch(playerMatchId)
            .then(OneMatchFromDB => {
                console.log(OneMatchFromDB)
                this.setState({ PlayerMatch: OneMatchFromDB.data })
            })
            .catch(err => console.log("Error", err))
    }

    updatePlayersList = () => {
        this._playersService.getAllPlayers()
            .then(allPlayersFromDB => this.setState({ players: allPlayersFromDB.data }))
            .catch(err => console.log("Error", err))

    }


    handleCheckBox = (checked, playerID) => {
        // e.preventDefault()
        console.log("ENTRAAAs")
        console.log(checked)
        console.log(playerID)
        const copyTeamPlayer = [...this.state.teamPlayers]
        if (checked) {
            copyTeamPlayer.push(playerID)
            this.setState({ teamPlayers: copyTeamPlayer })
        } else {
            let index = copyTeamPlayer.indexOf(playerID)
            copyTeamPlayer.splice(index, 1)
            this.setState({ teamPlayers: copyTeamPlayer })
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.teamPlayers, this.props.match.params.id)

        this._playerMatchService.postOneMatch(this.state.teamPlayers, this.props.match.params.id)
            .then(match => {
                console.log(match.data)
                console.log(this.state.PlayerMatch)
                this.setState({
                    PlayerMatch: match.data,
                    player: []
                })


            })
            .catch(err => console.log(err))
        //enviar al back el ID del partido que estamos configurando y el state- 
    }


    render() {
        // console.log(this.state.PlayerMatch)
        console.log(this.state.PlayerMatch)
        return this.state.PlayerMatch ? (
            <>
                <Link className="btn btn-sm btn-dark" to="/statistics">Ver Estadisticas</Link>
                <div className="Match">
                    <h1>PARTIDO EN DIRECTO</h1>

                    <p>clasificación: {this.state.PlayerMatch.clasification}</p>

                    {this.state.PlayerMatch.players.length !== 0 ?


                        this.state.PlayerMatch.players.map(player => {

                            return (
                                <>
                                    <p>Nombre: {player.name}</p>
                                    <p>apellido: {player.lastName}</p>
                                    <p>Goles: {player.goals}</p>
                                    <p>Asistencias: {player.assists}</p>
                                    <p>Minutos Jugados: {player.minutePlays}</p>
                                    <p>Tarjetas: {player.card}</p>
                                    <p>Puntuación: {player.rating}</p>
                                </>


                            )
                        })
                        : <p>NO TIENES JUGADORES</p>

                    }
                    <p>Clasificación: {this.state.PlayerMatch.clasification}</p>
                    <p>Equipo: {this.state.PlayerMatch.match}</p>
                    <p>Equipo rival: {this.state.PlayerMatch.rival}</p>
                    <p>Resultado a favor: {this.state.PlayerMatch.goalsLocal}</p>
                    <p>Resultado en contra: {this.state.PlayerMatch.goalsRival}</p>
                    <p>jornada: {this.state.PlayerMatch.season}</p>
                    <p>Fecha de partido: {this.state.PlayerMatch.date}</p>
                </div>
                <div>
                    {this.state.PlayerMatch.players.length === 0 ?
                        this.state.players.map(player =>


                            <MatchPlayers {...player} matchID={this.state.PlayerMatch._id} updateMatchsList={this.updateMatchsList} updatePlayersList={this.updatePlayersList} checked={this.state.checked} handleCheckBox={this.handleCheckBox}></MatchPlayers>

                        ) :
                        null}
                    {this.state.PlayerMatch.players.length === 0 ?
                        <>
                            <Form onSubmit={this.handleSubmit}>
                                <Button variant="dark" size="sm" type="submit" >Crear </Button>
                            </Form>
                        </>
                        : null}
                </div>
            </>




        ) : "Espera un poco"
    }
}

export default PlayersMatch

