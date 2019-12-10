import React from 'react'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

const PlayersCard = ({ _id, name, lastName, nacionality, age, weight , category , position , skills }) => {
    return (
        <Col className="player-card" md={9}>
            <h2>{name}</h2>
            <h2>{lastName}</h2>
            <p>{nacionality}</p>
            <p>{age}</p>
            <p>{weight}</p>
            <p>{category}</p>
            <p>{position}</p>
            <p>{skills}</p>
            <br></br>
            {/* <Link className="btn btn-sm btn-dark" to={`/players/${_id}`}>Ver detalles</Link> */}
        </Col>
    )
}
export default PlayersCard
