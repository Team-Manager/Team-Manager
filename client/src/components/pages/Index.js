import React from 'react'
import { Container, Row , } from 'react-bootstrap'
import Calendar from "../calendar/calendar"
import { Link } from 'react-router-dom'


const Index = () => {

    return (
        <>
            <section class="sec1">
                <h1>Manager App!</h1>
                <p>la app preferida de los entrenadores de futbol</p>
                {/* <img className="prueba3" src="./images/imagen5.png" width="30" height="30"/> */}
                {/* <button type="submit">Día de Partido</button> */}
                <Link  className="btn btn-sm btn-dark" to="/match">Día De Partido</Link>
                <Calendar></Calendar>
            
            </section >
            <section class="sec2">
            <h2>Aqui pondremos otra cosa diferente</h2>
            <p>Es lo que te digo</p>
            </section>
            <section className="sec3">
                <h3>Aqui otra</h3>
                <p>lorem borja ipsum lorem bipsm borja borji borjita bor borjinho bor ipsum</p>
            </section>
            {/* <footer className ="footer">
                <p> Imanol</p>
                <p> Borja</p>
            </footer>
        */}
</>

    )

}




/*export default class Calendar extends React.Component {*/
/*state = {

}*/

/*constructor(props) {

}*/



export default Index

