import axios from 'axios'

export default class Services {
    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/matchs/playersMatch',
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }
    getOneMatch = id => {
        console.log(id)
        return this._service.get(`/${id}`)
    }
    postOneMatch = (players, matchID) => this._service.post(`/editMatch`, { players, matchID })

}