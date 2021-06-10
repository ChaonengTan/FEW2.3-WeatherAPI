import {useState} from 'react'
import './Mood.css'
import Moodbutton from './MoodButtons'
function Mood(props) {
    const {weather} = props
    const moods = ['Happy', 'Sad', 'Gloomy']
    const [mood, setMood] = useState(null)
    return (
        <div>
            <div className='moodInput'>
                <div>
                    <input
                        placeholder='Enter your mood'
                        value={mood}
                        onChange={e => setMood(e.target.value)}
                    />
                </div>
                <p>or</p>
                <div className='moodButtons'>
                    {moods.map(name => {
                        return(
                            <Moodbutton name={name} onclick={name => setMood(name)}/>
                        )
                    })}
                </div>
            </div>
            {mood && <h3>It is {weather} and you are {mood}</h3>}
        </div>
    )
}
export default Mood