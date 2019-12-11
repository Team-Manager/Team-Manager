import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/matchs',
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    getAllMatchs= () => this._service.get('/getAllMatchs')
    postMatchs = match => this._service.post('/new', match)
}