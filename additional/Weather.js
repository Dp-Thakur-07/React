import react, { useState } from 'react'
import axios from  'axios';

export default function Weather(){
    const[city , setcity] = useState();
    const[weather , setweather] = useState();

    const handlecitychange=(event)=>{
        setcity(event.target.value)
    }
  
   const FetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'c2af19cda39c52dd96bf3feabf5af975'
        }`)
        setweather(response)
      } catch (error) {
        console.log("Error Fetching from data" , error);
        
      }
   }
   
    
    
    const handlebutton = ()=>{
     FetchWeather();
    }
    return(
        <div className='weather-container'>
            <input type='text' placeholder='Enter City Name' value={city} onChange={handlecitychange}/>
            <button onClick={handlebutton}>Get weather</button>
            {weather && (
                <>
                <div>
                    <h3>{weather.data.name}</h3>
                    <p>Temp is: {weather.data.main.temp}</p>
                    <p>{weather.data.weather[0].description}</p>
                </div>
                </>
            )}
        </div>
    )
}