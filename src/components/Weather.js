import {useState} from 'react'
import './Weather.css'
import {apiKey} from '../env'

import Radiobutton from './Radiobutton'
import WeatherDisplay from './WeatherDisplay'

function Weather() {
    const [zip, setZip] = useState('')
    const [unit, setUnit] = useState('')
    const [data, setData] = useState(null)

    async function fetchWeather(){
        const apikey = apiKey
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`
        const res = await fetch(path)
        const json = await res.json()
        if(json.cod!==200){
            setData({cod:json.cod, message:json.message})
            return
        }
        setData({
            temp:json.main.temp,
            feelsLike:json.main.feels_like, 
            description:json.weather[0].description,
            humidity:json.main.humidity,
            pressure:json.main.pressure,
            windSpeed:json.wind.speed,
            icon:json.weather[0].icon,
            cod:json.cod,
            message:json.message,
        })
    }

    return (
        <div className='Weather'>
            <WeatherDisplay {...data}/>
            <h1>{zip} {unit}</h1>
            <form onSubmit={e => {
                e.preventDefault()
                fetchWeather()

            }}>
                <div>
                    <input
                        placeholder='Enter zip code'
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                    />
                    <button type='submit'>Submit</button>
                </div>
                <select onChange={e => setUnit(e.target.value)} value={unit}>
                    <option value='metric'>Celcius</option>
                    <option value='imperial'>Fahrenheit</option>
                    <option value='standard'>Kelvin</option>
                </select>

                <Radiobutton
                    label='metric'
                    name='unit'
                    checked={unit==='metric'}
                    onChange={() => setUnit('metric')}
                />
                <Radiobutton
                    label='imperial'
                    name='unit'
                    checked={unit==='imperial'}
                    onChange={() => setUnit('imperial')}
                />
                <Radiobutton
                    label='standard'
                    name='unit'
                    checked={unit==='standard'}
                    onChange={() => setUnit('standard')}
                />
                
            </form>
        </div>
    )
}
export default Weather