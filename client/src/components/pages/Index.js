import React from 'react'
import { Container, Row , } from 'react-bootstrap'
import Calendar from "../calendar/calendar"
import { Link } from 'react-router-dom'


const Index = () => {

    return (
        <>
            <section className="sec1">
                <h1>Manager App!</h1>
                <h2>La app preferida de los entrenadores de futbol</h2>
                <p>"TU TRIUNFO SERÁ EL MIO"</p>
                <Link className="btn btn-sm btn-dark" to="/match">Día De Partido</Link>
                <Calendar></Calendar>
            
            </section >
            <section className="sec2">
                <h2 className="Up">Todo lo que necesitas para ser un gran entrenador</h2>
                <ul>
                    
                    <li><h3>Registra a tu equipo</h3></li>
                    <li><h3>Crea tus propias alineaciones</h3></li>
                    <li><h3>Obten las mejores estadisticas</h3></li>
                    <li><h3>Registra tus entrenamientos y partidos</h3></li>
                        
                </ul>
            </section>
            <section className="sec3">
                <h3></h3>
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
// redireccionar 
//setstate : redireccionar a otra vista en esa vista, te vas a traer detalles del partido, ahi, formulario gigante que se puede editar 
//boton editar modal: 
// datos del partido, esto puede ser un botton ventana modal y poder editar 
// seria un botton que te lleva a una ventana modal , en la que se pueda editar los datos que le pasamos al jugador,
// teneis el match, al principio le pasais este string, o otro.
//players que es un array, modelo de player, ya tienes los player dentro del match,
// en vez de <p> mejor input tendreis que tener un botton de crear, para ese formulario. tu aqui, en ronaldo por ejemplo quieres editar propiedades que tiene el player. editar modelo player


//esto puede ser un formulario(componente player matchPlayer), eso de por si son inputs,
// este componenten sera un formulario, todo seran inputs, que podreis editar, handleinput, abajo un botton cada carta, añadir jugador, un submit, 
// ruta ajustar
// hemos dicho que seran input, crear botton para todos. Si cada tarjeta va a ser un formulario con sus input, tendra un botton que hara la llamada al back
// no tengo jugadores, en vez de etiquetas p, que todo sea input, cada tarjeta un formulario. añadir al equipo pero ya con los datos 
// conver handlesubmit, handleinput, tarjeta desaparecer, y añadir arriba desde la base de datos
// botton send cada tarjeta formulario, 


// input select base de datos, 
// 
export default Index

