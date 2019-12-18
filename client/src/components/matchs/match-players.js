import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


//EDITAR ESTA PARTE

class MatchPlayers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }




    }




    render() {

        return (



            <Col className="PlayerCard" md={2} >

                <p><strong>Nombre: </strong>{this.props.name}</p>
                <p><strong>Apellido:</strong>{this.props.lastName}</p>
                <p><strong>Goles: </strong> {this.props.goals}</p>
                <p><strong>Asistencias: </strong> {this.props.assists}</p>
                <p><strong>Minutos Jugados: </strong> {this.props.minutePlays}</p>
                <p><strong>Tarjetas: </strong> {this.props.cards}</p>
                <p><strong>Puntuación: </strong> {this.props.rating}</p>
                <div>
                    {/* <InputGroup className="mb-3">
                        <p><strong>Añadir al partido: </strong></p>
                    <InputGroup.Checkbox aria-label={this.props.titular} /> */}
                    {/* <div>
                        <Button className="ButtonsMatch" variant="dark" onClick={this.handleShow}>Editar jugador</Button>
                    </div>     */}
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="titular" value={this.state.checked} name={this.props._id} onChange={(e) => this.props.handleCheckBox(e.target.checked, this.props._id)} />
                    </Form.Group>


                    {/* <input type="checkbox" label="titular" value={this.props.checked} name={this.props.name} onChange={this.handleCheckBox}></input> */}

                </div>

            </Col>

        )
    }

}

export default MatchPlayers

