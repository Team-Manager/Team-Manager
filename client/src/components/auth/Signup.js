import React, { Component } from 'react'
import { Button, Form, Container } from 'react-bootstrap'

import Service from '../../service/Auth.service'

class SignupForm extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {user:{ username: '', password: '' }}
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state.user
        this._service.signup(username, password)
            .then(theNewUser => {
                console.log("aqui", theNewUser.data)
                this.props.setUser(theNewUser.data)
                this.setState({ username: '', password: '' })
                this.props.history.push('/')  // IMPORTANTE !!!!!!!! SIRVE PARA REDIRIGIR A OTRA PAGINA
            })
            .catch(err => console.log(err.response.data.message))
    }


    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({ user: { ...this.state.user, [name]: value }})
    }

    render() {
        return (
            <section className="signPic">
            <Container>
                <div className="form">
                <h1>Registro</h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" name="username" onChange={this.handleInputChange} value={this.state.username} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="text" name="password" onChange={this.handleInputChange} value={this.state.password} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Registrarme</Button>
                    </Form>
                </div>

                </Container>
            </section>
        )
    }
}


export default SignupForm