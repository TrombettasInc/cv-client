import React from "react";
import styles from "./Weather.module.css";

const Info = ({ weather }) => {
  return (
    <div className={styles["weather-container"]}>
      <h2>{weather.name}</h2>
      <div className={styles["weather-info"]}>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather-icon" />
      <p className={styles.temperature}>{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className={styles.description}>{weather.weather[0].description}</p>
      <div className={styles.details}>
        <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
        <p>Humidity: {weather.main.humidity} %</p>
        <p>Air Pressure: {weather.main.pressure}</p>
      </div>
      
    </div>
  );
}

export default Info;
