import axios from 'axios'

import { useState } from 'react'



const App = () => {

/* 
  The state below is used to keep track of the current user city and also the setCity property to update the city variable
 */

const [ city, setCity] = useState("")

/*
  The states below are used to store data from the mini backend endpoint and set property to update the variable
 */

const [ weatherDescription, setweatherDescription] = useState("")

const [weatherIcon,  setweatherIcon] = useState("")

const [weatherTemp, setweatherTemp] = useState("")


let weatherData


const getForecast = async () => {


//config for the api endpoint that sends a query params to the backend using the get method
    const config = {
      method : 'GET',
      url : 'http://localhost:5001/',
      params : {
         userCity : city
      }
    }

    try {
      const res =  await axios.request(config)
      weatherData = res.data
      
      /* 

      * assign weather data to variables by destructring data from the api response
      
      */
      console.log(weatherIcon);
      setweatherDescription(weatherData.weather[0].description);
      setweatherTemp(weatherData.main.temp)
      setweatherIcon(weatherData.weather[0].icon)

    }
    
    catch (error) {
      console.log(error.message);
    }

  }

  return ( 
    <>

    
    <div className='flex gap-4 w-1/2 m-auto justify-around mt-4  '>

      <input className='w-4/6 bg-transparent border-b-2 border-teal-50 focus:outline-none font-poppins'
      placeholdertype="text" 
      onChange={(e) => { setCity(e.target.value); } } />

      <button className='font-poppins bg-teal-50 p-4 rounded-lg hover:bg-teal-100' onClick={getForecast}>Search</button>
    </div>

    {/* weathercard to display details of weather from selected city */}
    <div className="flex flex-col w-3/6 mx-auto  bg-slate-50 mt-6 rounded-md justify-center items-center font-poppins">

      {/* current weather temperature */}
      <div className='mt-6'>
          <h2>{weatherTemp} <sup>&deg;</sup>C  </h2>
      </div>

      {/* current weather icon */}
      <div>
      <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather Icon"/>
      </div>

      {/* current weather description */}
      <div className="mt-4">
        {weatherDescription}
      </div>
    </div>
    
   
   
    </>
   );
}
 
export default App;
