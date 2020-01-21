import axios from 'axios'

export default class Services {
    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/players',
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }
<<<<<<< HEAD
    getAllPlayers = () => this._service.get('/players/getAllPlayers')
    
    postPlayers = player => this._service.post('/players/new', player)

    PlayerEdit = (player, playerID) => this._service.post('/players/edit', { player, playerID })

    addPlayerToMatch = (player, playerID, matchID) => {
        return this._service.post('/players/addToMatch', { player, playerID, matchID })
=======
    getAllPlayers = () => this._service.get('/getAllPlayers')
    postPlayers = player => this._service.post('/new', player)

    PlayerEdit = (player, playerID) => {
        console.log(player)
        return this._service.post('/edit', { player, playerID })
>>>>>>> ad233d43042ae1c596775f0fedd72b6553453a1e
    }
    deletePlayer = (playerID) => {
        console.log(playerID)
        return this._service.get(`/delete/${playerID}`)
    }
}