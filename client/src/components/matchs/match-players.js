import React, { Component } from 'react'
import { Container, Row, Col, Form} from 'react-bootstrap'


//EDITAR ESTA PARTE

class MatchPlayers extends Component {
    constructor(props) {
        super(props)



        

    }


    render() {
        console.log(this.props)
        return (

            

               <Col className="PlayerCard" md={3} >
                
                                  <p><strong>Nombre: </strong>{this.props.name}</p>
                                  <p><strong>Apellido:</strong>{this.props.lastName}</p>
                                  <p><strong>Goles: </strong> {this.props.goals}</p>
                                  <p><strong>Asistencias: </strong> {this.props.assists}</p>
                                  <p><strong>Asistencias: </strong> {this.props.assists}</p>
                                  <p><strong>Minutos Jugados: </strong> {this.props.minutePlays}</p>
                                  <p><strong>Tarjetas: </strong> {this.props.cards}</p>
                                  <p><strong>Puntuación: </strong> {this.props.rating}</p>
                <div>
                    {/* <InputGroup className="mb-3">
                        <p><strong>Añadir al partido: </strong></p>
                        <InputGroup.Checkbox aria-label={this.props.titular} /> */}
                        
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="titular" />
                        </Form.Group>
                    
            
                    </div>
                                 
                </Col>
            
        )
    }

}

export default MatchPlayers

