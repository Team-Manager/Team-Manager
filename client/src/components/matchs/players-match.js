import React, { Component } from 'react'
// import Service from '../../service/PlayerMatch.service'

//NO OLVIDEMOS QUE PODEMOS IMPORTAR VARIOS SERVICIOS!!!!!!!!!!
import playersService from '../../service/Players.service'
import playerMatchService from '../../service/PlayerMatch.service'

import ListPlayers from '../players/players-list'



class PlayersMatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PlayerMatch: {},
            players: []
        }
        this._playerMatchService = new playerMatchService()
        // this._playersService = new playersService()

    }

    componentDidMount = () => {
        this.updateMatchsList()
        // this.updatePlayersList()
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

    // updatePlayersList = () => {
    //     this._playersService.getAllPlayers()
    //         .then(allPlayersFromDB => this.setState({ players: allPlayersFromDB.data }))
    //         .catch(err => console.log("Error", err))

    // }


    render() {
        console.log(this.state.PlayerMatch)
        console.log(this.state.players)
        return (
            <div>
                <p>PARTIDO</p>

                <p><small>goles: </small>{this.state.PlayerMatch.goals}</p>
                <p><small>clasificación: </small>{this.state.PlayerMatch.clasification}</p>
                <p><small>partido: </small>{this.state.PlayerMatch.match}</p>
                <p><small>resultado: </small>{this.state.PlayerMatch.result}</p>
                <p><small>jornada: </small>{this.state.PlayerMatch.season}</p>

                < ListPlayers />
                
                {/* lo comentado de la linea 61 a 71 para contarle a raluca */}

{/* 
                {this.state.players ?
                    this.state.players.map(player =>
                        <p>{player.name}</p>
                       
                    ) :
                    null} */}

                {/* {this.state.matchs.map((match, idx) => <MatchsCard key={match._id} {...match} updateMatchsList={this.updateMatchsList} deleteMatch={this.deleteMatchHandler} />)} */}

            </div>
        )
    }
}

export default PlayersMatch

