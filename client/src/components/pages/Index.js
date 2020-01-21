import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import Calendar from "../calendar/calendar"
import { Link } from 'react-router-dom'

import entrenador from '../../Entrenador.jpg'
import abrazo from '../../abrazo.jpg'
import niños from '../../niños.jpeg'

const Index = () => {

    return (
        <>
            <section className="sec1">
                <h1>Manager App!</h1>
                <h2>La app preferida de los entrenadores de futbol</h2>
                <p>"TU TRIUNFO SERÁ EL MIO"</p>
                <Link className="btn btn-sm btn-dark" to="/match">Día De Partido</Link>
                <Calendar></Calendar>
<<<<<<< HEAD

=======
            
            </section >
            <section class="sec2">
            <h2>Crea tu propia alineación
            </h2>
            <p>Como en las grandes batallas, a veces no gana el mejor, 
              sino el que está más convencido</p>
                <p>No tengas miedo a fallar, ten miedo 
              a no intentarlo</p>
                <p>Cada temporada es un nuevo reto para mejorar en términos de partidos, goles
              y asistencias</p>
>>>>>>> ad233d43042ae1c596775f0fedd72b6553453a1e
            </section>

            <section className="sec3">

                <div >
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100 picCar" src={entrenador} alt="First slide" />

                            <Carousel.Caption className="color">
                                <h3>Registra a tu equipo en Manager App!</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 picCar" src={abrazo} alt="Second slide" />

                            <Carousel.Caption className="color">
                                <h3>Crea Tu Propia Alineación</h3>
                                
                            </Carousel.Caption >
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 picCar" src={niños} alt="First slide" />

                            <Carousel.Caption className="color">
                                <h3>Obten estadistiscas de tus jugadores!</h3>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>



            <footer className="footer">
                <div>
                    <h2 className="titleAlign">ManagerApp!</h2>
                </div>
                <p>Imanol Bernardino</p>
                <p> Borja Valdes</p>
                <p>Contact information: <a href="mailto:manager@app.com">
                    manager@app.com</a>.</p>


            </footer>



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

