function WeatherDisplay(props) {
    const {temp, feelsLike, description, humidity, pressure, windSpeed, icon, cod, message} = props
    const iconPath = `http://openweathermap.org/img/wn/${icon}@2x.png`
    if (cod!==200){
        return(
            <small>{message}</small>
        )
    }
    return (
        <div className='WeatherDisplay'>
            <h1><img src={iconPath}/>{temp}</h1>
            <small>Feels Like: {feelsLike}</small>
            <p>{description}</p>
            <p>Humidity: {humidity} Pressure: {pressure} Wind Speed: {windSpeed}</p>
        </div>
    )
}
export default WeatherDisplay