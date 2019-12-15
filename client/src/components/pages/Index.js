import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Calendar from "../calendar/calendar"

import { Link } from 'react-router-dom'

const Index = () => {

    return (
        <>
            <section>
                <h1>Manager App!</h1>
                <p>la app preferida de los entrenadores de futbol</p>
                <img className="prueba3" src="./images/imagen5.png" width="30" height="30"/>
                {/* <button type="submit">Día de Partido</button> */}
                <Link  className="btn btn-sm btn-dark" to="/match">Día De Partido</Link>
                <Calendar></Calendar>
            
            </section>
            <Container>
            </Container>
            <section className ="prueba">
            <h2>Aqui pondremos otra cosa diferente</h2>
            <p>Es lo que te digo</p>
                <img className="prueba3" src="./images/imagen3.png"
                    width="30"
                    height="30"
                />
            <br></br>
            </section>
            <section className="prueba2">
                <img className="prueba4" src="./images/imagen4.png"
                    width="30"
                    height="30"
                />
                <h3>Aqui otra</h3>
            </section>
            <footer className ="footer">
                <p> Imanol</p>
                <p> Borja</p>
            </footer>
       
</>

    )

}




/*export default class Calendar extends React.Component {*/
/*state = {

}*/

/*constructor(props) {

}*/



export default Index

