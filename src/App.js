import React, { Component } from "react";
import "./styles/main.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherChannel from "./components/WeatherChannel";

export default class App extends Component {
  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <WeatherChannel />
        <Footer />
      </div>
    );
  }
}