import React, { Component } from 'react'
import '../calendar/calendar.css';
import Service from "../../service/Match.service"

export default class Calendar extends Component {

    constructor() {
        super()
        this.state = {
            // dt: new Date()
            calendarArray: [
                " ", " ", " ", " ", " ", " ", " ",
                " ", " ", " ", " ", " ", " ", " ",
                " ", " ", " ", " ", " ", " ", " ",
                " ", " ", " ", " ", " ", " ", " ",
                " ", " ", " ", " ", " ", " ", " "
            ]
        }
        this._service = new Service()
        this.dt = new Date()
        this.today = new Date();
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.cells = ""
        this.daysOfweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]



    }

    componentDidMount() {
        this.renderDate()
     //invocar el metodo creado.
    }
    // MEtodo para traer de la base de datos todos los partidos. 
    //Get All players

    renderDate = () => {
        this.dt.setDate(1);
        // this.dt.setDate(13)
        const firstDay = this.dt.toDateString().slice(0, 3)

        const weekDay = this.daysOfweek.indexOf(firstDay)
        const numberOfDays = new Date(this.dt.getFullYear(), this.dt.getMonth() + 1, 0).getDate()


        document.getElementById("month").innerHTML = this.dt.toDateString();
        document.getElementById("date_str").innerHTML = this.months[this.dt.getMonth()];
        let calendarArrayCopy = [...this.state.calendarArray]

        let day = 1

        for (let i = weekDay; i < calendarArrayCopy.length; i++) {

            if (day <= numberOfDays) {
                calendarArrayCopy[i] = day
                day++
            }

        }

        this.setState({
            calendarArray: calendarArrayCopy
        })
    }

    moveDate = para => {


        if (para == 'prev') {
            this.dt.setMonth(this.dt.getMonth() - 1);
            this.setState({
                calendarArray: [
                    " ", " ", " ", " ", " ", " ", " ",
                    " ", " ", " ", " ", " ", " ", " ",
                    " ", " ", " ", " ", " ", " ", " ",
                    " ", " ", " ", " ", " ", " ", " ",
                    " ", " ", " ", " ", " ", " ", " "
                ]
            }, () => this.renderDate())

        } else if (para == 'next') {

            this.dt.setMonth(this.dt.getMonth() + 1);
            this.setState({
                calendarArray: [
                    " ", " ", " ", " ", " ", " ", " ",
                    " ", " ", " ", " ", " ", " ", " ",
                    " ", " ", " ", " ", " ", " ", " ",
                    " ", " ", " ", " ", " ", " ", " ",
                    " ", " ", " ", " ", " ", " ", " "
                ]
            }, () => this.renderDate())
        }

    }



    render() {

        return (
            <div>
                <div >
                    <div className="wrapper">
                        <div className="calendar">
                            <div className="month">
                                <div className="prev" ref={this.prevRef} onClick={() => this.moveDate("prev")}>
                                    <span></span>
                                </div>
                                <div>
                                    <h2 id="month" ref={this.monthRef}>December</h2>
                                    <p id="date_str" ref={this.dateRef}></p>
                                </div>
                                <div className="next" ref={this.nextRef} onClick={() => this.moveDate("next")}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="weekends">
                                {this.daysOfweek.map(day => <div>{day}</div>)}

                            </div>
                            <div id="days" className="days" ref={this.daysRef}>
                                {this.state.calendarArray.map(day => {
                                    return <div>{day}</div>
                                })}
                            </div>
                        </div>
                    </div>
                    {/* <script src="js/calendar.js"></script> */}
                </div>
            </div>
        )
    }
}
