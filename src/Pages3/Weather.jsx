import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import styles from './Weather.module.css'
import Info from './Info'
import Info5Days from "./Info5Days";

const Weather = () => {
  const inputRef = useRef();
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();

  async function searchCity() {

    const city = inputRef.current.value;
    const key = "c236744fe9a19f14311cca86d5ad9284";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=en&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=en&units=metric`

    const info = await axios.get(url);
    const info5Days = await axios.get(url5Days);
    setWeather5Days(info5Days.data)

    setWeather(info.data);
  }

  return (
    <div className={styles.Wecontainer}>
      <h1 className={styles.Weh1} >Weather Forecast</h1>
      <input ref={inputRef} type="text" placeholder="type the city name" className={styles.Weinput} />
      <button onClick={searchCity} className={styles.Webutton} >Search</button>
      {weather && <Info weather={weather}/>}
      {weather5Days && <Info5Days weather5Days={weather5Days}/>}
    </div>
  );
};

export default Weather;
