import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/sparklines";
import GoogleMap from "../components/google-map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const Temps = cityData.list.map(list => list.main.temp);
    const Pressures = cityData.list.map(list => list.main.pressure);
    const Humidities = cityData.list.map(list => list.main.humidity);
    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={cityData.city.id}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={Temps} color="orange" units="K" />
        </td>
        <td>
          <Chart data={Pressures} color="blue" units="hpa" />
        </td>
        <td>
          <Chart data={Humidities} color="red" units="%" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempreature (K)</th>
            <th>Pressure (hpa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weatherList.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weatherList }) {
  return { weatherList }; //=== {weatherList:weatherList};
}

export default connect(mapStateToProps)(WeatherList);
