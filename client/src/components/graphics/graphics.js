
import React, { Component } from 'react'
import Chart from './chart'
import MatchsService from '../../service/Match.service'
import { Link } from 'react-router-dom'



class Graphics extends Component {
    constructor(props) {
        super(props)

        this.state = {
            matches: []
        }
        this._MatchsService = new MatchsService()
    }

    componentDidMount = () => {
        this.updateMatchsList()

    }

    updateMatchsList = () => {
        const MatchsList = this.props.match.params.id
        this._MatchsService.getAllMatchs()
            .then(oneMatchfromDB => {
                this.setState({ matches: oneMatchfromDB.data })

            })
            .catch(err => console.log('error', err))

    }



    render() {
        console.log("holaaaaaa", this.state.matches)
        return (
            <div>
                <p>Hola soy estadísticas</p>


                {this.state.matches.map((match, idx) => <Chart {...match} key={idx} ></Chart>)}



                <Link className="btn btn-sm btn-dark" to="/">Volver</Link>
            </div>
        )

    }

}

export default Graphics

