import React from 'react'
import styles from "./Weather.module.css";

const Info5Days = ({weather5Days}) => {

    let dailyForecast = {}

    for(let forecast of weather5Days.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if(!dailyForecast[date]){
           dailyForecast[date] = forecast
    
        }
    }

     const next5Days = Object.values(dailyForecast).slice(1,6);

     function convertDate (date) {
        const newDate = new Date (date.dt * 1000).toLocaleDateString('en', {weekday: 'long', day: '2-digit'})
    
     }

  return (
    <div className={styles["forecast-container"]}>
      <h3> 5 day Forecast</h3>
      <div className={styles['weather-list']}>
      {next5Days.map(forecast => (
        <div key={forecast.dt}  className= {styles['weather-item']} >
            <p className={styles["forecast-day"]}> {convertDate(forecast)} </p>
            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="forecast-icon" />
            <p className={styles["forecast-description"]}>{forecast.weather[0].description}</p>
            <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max</p>
        </div>
      ) )}
      </div>
    </div>
  )
}

export default Info5Days