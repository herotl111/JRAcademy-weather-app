import React, { Component } from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import "./styles/main.css";
import channelReducer from "./reducers/channelReducer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherChannel from "./components/WeatherChannel";

const store = createStore(channelReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default class App extends Component {
  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Provider store={store}>
          <WeatherChannel />
        </Provider>
        <Footer />
      </div>
    );
  }
}