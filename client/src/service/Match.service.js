import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/matchs',
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

<<<<<<< HEAD
    getAllMatchs = () => {
        console.log("ESTOY EN EL SERVICIO YAAAY ")
        return this._service.get('/matchs/getAllMatchs')
    }

    postMatchs = match => this._service.post('/matchs/new', match)
=======
    getAllMatchs= () => this._service.get('/getAllMatchs')
    postMatchs = match => this._service.post('/new', match)
>>>>>>> ad233d43042ae1c596775f0fedd72b6553453a1e

    MatchEdit = (match, matchID) => {
        return this._service.post('/edit', { match, matchID })
    }
    deleteMatch = (matchID) => {
        return this._service.get(`/delete/${matchID}`)
    }
}