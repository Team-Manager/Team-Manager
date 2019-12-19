// let chart = am4core.create("assets-chart", am4charts.PieChart);
// chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
// chart.responsive.enabled = true;
// chart.data = this.state.matches
// chart.radius = am4core.percent(70);
// chart.innerRadius = am4core.percent(40);
// chart.startAngle = 180;
// chart.endAngle = 360;
// let series = chart.series.push(new am4charts.PieSeries());
// series.dataFields.value = "amount";
// series.dataFields.category = "investment";
// series.slices.template.cornerRadius = 10;
// series.slices.template.innerCornerRadius = 7;
// series.slices.template.draggable = true;
// series.slices.template.inert = true;
// series.alignLabels = false;
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
            newObject: []
        }
    }

    componentDidMount = () => {
        let chart = am4core.create(`${this.props._id}`, am4charts.PieChart);
        let series = chart.series.push(new am4charts.PieSeries());
        console.log(this.props)
        let copyArray = [...this.state.newObject]

        
        if (this.props.players.length !== 0) {
            let dataDB = this.props.players.map((el, idx) => copyArray.push({ "age": el.age, "weight": el.weight }))
        }

        series.dataFields.value = "age"
        series.dataFields.category = "weight"
        console.log(copyArray)


        this.setState({newObject: copyArray}, () => this.startChart(chart))


    }

    startChart = (chart) => {
        // console.log(this.props)
        console.log(this.state.newObject)

        chart.data = this.state.newObject
        // console.log(newObject)

        // chart.data = [
        //     {
        //         "age": 34,
        //         "weight": 56
        //     },
        //     {
        //         "age": 33,
        //         "weight": 56
        //     }
        // ]


        // console.log(newObject)
        // console.log(chart.data)


        // console.log(chart.data)

    }



    render() {





        // console.log(this.props)
        return (
            <>
                <div id={this.props._id}></div>
            // <p>{}</p>
                <p>{this.props._id}</p>
                </>
            // Add data
            //


            // Add and configure Series
            // let pieSeries = chart.series.push(new am4charts.PieSeries());
            // pieSeries.dataFields.value = "litres";
            // pieSeries.dataFields.category = "country";

        )

    }



}

export default Chart