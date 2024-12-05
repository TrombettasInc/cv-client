import React from "react";
import styles from "./Weather.module.css";

const Info = ({ weather }) => {
  return (
    <div className={styles["Weweather-container"]}>
      <h2 className={styles.Weh2} >{weather.name}</h2>
      <div className={styles["Weweather-info"]}>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather-icon" />
      <p className={styles.Wetemperature}>{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className={styles.Wedescription}>{weather.weather[0].description}</p>
      <div className={styles.Wedetails}>
        <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
        <p>Humidity: {weather.main.humidity} %</p>
        <p>Air Pressure: {weather.main.pressure}</p>
      </div>
      
    </div>
  );
}

export default Info;
