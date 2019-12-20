// let chart = am4core.create("assets-chart", am4charts.PieChart);
// chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
// chart.responsive.enabled = true;
// chart.radius = am4core.percent(70);
// chart.innerRadius = am4core.percent(40);
// chart.startAngle = 180;
// chart.endAngle = 360;
// let series = chart.series.push(new am4charts.PieSeries());
// series.dataFields.value = "amount";
// series.dataFields.category = "investment";
// chart.data = this.state.matches
// series.slices.template.cornerRadius = 10;
// series.slices.template.innerCornerRadius = 7;
// series.slices.template.draggable = true;
// series.slices.template.inert = true;
// series.hiddenState.properties.startAngle = 90;
// series.hiddenState.properties.endAngle = 90;
// chart.legend = new am4charts.Legend();
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React, { Component } from 'react'


am4core.useTheme(am4themes_animated);

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playersPerformances: [],
            playersMinutes: [],
            playersAssists: [],

        }
    }

    componentDidMount = () => {
        let chart = am4core.create(`${this.props._id}`, am4charts.PieChart);
        let chart2 = am4core.create(`${this.props.goalsLocal}`, am4charts.PieChart);
        let chart3 = am4core.create(`${this.props.rival}`, am4charts.PieChart);
        let series = chart.series.push(new am4charts.PieSeries());
        let series2 = chart2.series.push(new am4charts.PieSeries());
        let series3 = chart3.series.push(new am4charts.PieSeries());

        let copyPerformances = []
        let copyMinutes = []
        let copyAssists = []

        let playersPerformances = [...this.state.playersPerformances]
        let playersMinutes = [...this.state.playersMinutes]
        let playersAssists = [...this.state.playersAssists]

        this.props.players.map(player => {

            copyPerformances.push({ player: player, performance: player.performance.find(perf => perf.match.includes(this.props._id)) })
            copyMinutes.push({ player: player, performance: player.performance.find(minu => minu.match.includes(this.props._id)) })
            copyAssists.push({ player: player, performance: player.performance.find(assis => assis.match.includes(this.props._id)) })
        })



        if (this.props.players.length !== 0) {
            copyPerformances.map((el, idx) => {
                if (el.performance) {
                    console.log(el.player.name)

                    playersPerformances.push({ "goals": el.performance.goals, "name": el.player.name })
                }
            })

            copyMinutes.map((elm, idx) => {
                // console.log(elm)
                if (elm.performance) {
                    console.log(elm.player.name)

                    playersMinutes.push({ "minutePlays": elm.performance.minutePlays, "name": elm.player.name })
                }
            })

            copyMinutes.map((elem, idx) => {
                if (elem.performance) {
                    console.log(elem.player.name)

                    playersAssists.push({ "assists": elem.performance.assists, "name": elem.player.name })
                }

            })

        }



        series.dataFields.value = "goals"
        series2.dataFields.value = "minutePlays"
        series3.dataFields.value = "assists"


        series.dataFields.category = "name"
        series2.dataFields.category = "name"
        series3.dataFields.category = "name"

        // console.log(copyArray)


        this.setState({ playersPerformances: playersPerformances, playersMinutes: playersMinutes, playersAssists: playersAssists }, () => this.startChart(chart, chart2, chart3))


    }

    startChart = (chart, chart2, chart3) => {
        // console.log(this.props)
        // console.log(this.state.newObject)
        console.log(this.state.playersAssists)
        // console.log(this.state.playersPerformances)

        chart.data = this.state.playersPerformances
        chart2.data = this.state.playersMinutes
        chart3.data = this.state.playersAssists
        // console.log(newObject)


    }





    render() {


        console.log(this.props)


        // console.log(this.props)
        return (
            <>
               
                <section>
                    <div>
                        <p>Goles</p>
                        <div id={this.props._id}></div>
                    </div>
                    <div>
                        <p>Minutos Jugados</p>
                        <div id={this.props.goalsLocal}></div>
                    </div>
                    <div>
                        <p>Asistencias</p>
                        <div id={this.props.rival}></div>
                            </div>
                </section>
                     


            </>


        )

    }



}

export default Chart