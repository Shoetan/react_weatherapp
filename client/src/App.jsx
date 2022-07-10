import axios from 'axios'

import { useState } from 'react'

import WeatherCard from './components/WeatherCard'

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


const [ isButtonClicked, setIsButtonClicked] = useState('')

let weatherData

const buttonClicked = () => {

    setIsButtonClicked(true)
}

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

      <button className='font-poppins bg-teal-50 p-4 rounded-lg hover:bg-teal-100' onClick={() => {

        getForecast();
        buttonClicked();

      }}>Search</button>
    </div>

{/* conditional rendering if the state is true the weather card will be displayed but if the state is false the card will no be displayed  */}

 { isButtonClicked ? 
      <WeatherCard
            weatherIcon = {weatherIcon}
            weatherDescription = {weatherDescription}
            weatherTemp = {weatherTemp}
          /> : null }
    </>
    
   );
}
 
export default App;
