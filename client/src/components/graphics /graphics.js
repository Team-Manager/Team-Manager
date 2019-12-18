import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class App extends Component {
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);

        // ... chart code goes here ...

        this.chart = chart;
    }
}