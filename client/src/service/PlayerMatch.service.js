import axios from 'axios'

export default class Services {
    constructor() {
        this._service = axios.create({
            baseURL: process.env.REACT_APP_URL,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }
    // getOneMatch = () => this._service.get('/getOneMatch')
    getOneMatch = id => {
        console.log(id)
        return this._service.get(`/playersMatch/${id}`)
    }
    postOneMatch = (players, matchID) => this._service.post(`/editMatch`, { players, matchID })

}