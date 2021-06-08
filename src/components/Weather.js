import {useState} from 'react'
import './Weather.css'
import Radiobutton from './Radiobutton'
import {apiKey} from '../env'
function Weather() {
    const [zip, setZip] = useState('')
    const [unit, setUnit] = useState('')
    const [data, setData] = useState(null)

    async function fetchWeather(){
        const apikey = apiKey
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}`
        await fetch()
    }

    return (
        <div className='Weather'>
            {data && <h1>{zip} {unit}</h1>}
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