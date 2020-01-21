import axios from 'axios'

export default class Services {
    constructor() {
        this._service = axios.create({
            baseURL: process.env.REACT_APP_URL,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }
    getOneMatch = id => {
        console.log(id)
        return this._service.get(`/matchs/playersMatch/${id}`)
    }
    postOneMatch = (players, matchID) => this._service.post(`/matchs/playersMatch/editMatch`, { players, matchID })

}