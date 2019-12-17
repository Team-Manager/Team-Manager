import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: process.env.REACT_APP_URL,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    getAllMatchs = () => this._service.get('/matchs/getAllMatchs')
    postMatchs = match => this._service.post('/matchs/new', match)

    MatchEdit = (match, matchID) => {
        return this._service.post('/matchs/edit', { match, matchID })
    }
    deleteMatch = (matchID) => {
        return this._service.get(`/matchs/delete/${matchID}`)
    }
}