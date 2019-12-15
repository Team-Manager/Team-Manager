import React from 'react'
import { Container, Row , } from 'react-bootstrap'
import Calendar from "../calendar/calendar"
import { Link } from 'react-router-dom'

const Index = () => {

    return (
        <Container>
            <section>
                <h1>Manager App!</h1>
                <p>la app preferida de los entrenadores de futbol</p>
                <Link className="btn btn-sm btn-dark" to="/match">Día De Partido</Link>
               
            </section>
           
            <Calendar></Calendar>
        </Container>
       


    )

}




/*export default class Calendar extends React.Component {*/
/*state = {

}*/

/*constructor(props) {

}*/



export default Index

