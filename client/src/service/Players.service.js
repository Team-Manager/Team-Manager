import axios from 'axios'

export default class Services {
    constructor() {
        this._service = axios.create({
            baseURL: process.env.REACT_APP_URL,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }
    getAllPlayers = () => this._service.get('/players/getAllPlayers')
    postPlayers = player => this._service.post('/players/new', player)

    PlayerEdit = (player, playerID) => {
        console.log(player)
        return this._service.post('/players/edit', { player, playerID })
    }
    PlayerEdit = (player, playerID) => {
        return this._service.post('/players/editar', { player, playerID })
    }
    deletePlayer = (playerID) => {
        console.log(playerID)
        return this._service.get(`/players/delete/${playerID}`)
    }
}