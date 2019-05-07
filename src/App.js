import React, { Component } from "react";
import "./styles/main.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherChannel from "./components/WeatherChannel";
import { deflate } from "zlib";

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


// 函数形式等效于上面的class形式
// const App = () => {
//   return (
//     <div className="weather-channel__container">
//       <Header />
//       <WeatherChannel />
//       <Footer />
//     </div>
//   );
// }

// export default App;