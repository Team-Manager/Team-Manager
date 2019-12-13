import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Calendar from "../calendar/calendar"
const Index = () => {

    return (
        <Container>
            <section>
                <h1>Manager App!</h1>
                <p>la app preferida de los entrenadores de futbol</p>
                <button type="submit">Día de Partido</button>
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

