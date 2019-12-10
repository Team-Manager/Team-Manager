import axios from 'axios'
export default class Services {
    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/players',
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }
    getAllPlayers = () => this._service.get('/getAllPlayers')
    postPlayers = player => this._service.post('/new', player)
}