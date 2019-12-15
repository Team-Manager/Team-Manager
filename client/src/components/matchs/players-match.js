import React, { Component , Col} from 'react'
// import Service from '../../service/PlayerMatch.service'

//NO OLVIDEMOS QUE PODEMOS IMPORTAR VARIOS SERVICIOS!!!!!!!!!!
import playersService from '../../service/Players.service'
import playerMatchService from '../../service/PlayerMatch.service'

import ListPlayers from '../players/players-list'
import MatchPlayers from "../matchs/match-players"



class PlayersMatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PlayerMatch: {},
            players: []
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


    render() {
        console.log(this.state.PlayerMatch)
        console.log(this.state.players)
        return (
            <div className="PlayerCard">
                <p>PARTIDO</p>

                <p>goles: {this.state.PlayerMatch.goals}</p>
                <p>clasificación: {this.state.PlayerMatch.clasification}</p>
                <p>partido: {this.state.PlayerMatch.match}</p>
                <p>resultado: {this.state.PlayerMatch.result}</p>
                <p>jornada: {this.state.PlayerMatch.season}</p>
                {this.state.players ?
                    this.state.players.map(player =>
                        
                        
                        <MatchPlayers {...player} ></MatchPlayers>
                        
                        ) :
                        null}
            </div> 
                

                        
            
        )
    }
}

export default PlayersMatch

