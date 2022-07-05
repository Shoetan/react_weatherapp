import axios from 'axios'

import { useState } from 'react'





const App = () => {

/* 
  The state below is used to keep track of the current user city and also the setCity property to update the city variable
 */
const [ city, setCity] = useState("")

/*
  The state below called data is used to store data from the mini backend endpoint and setData property to update the data variable
 */

const [weatherData, setweatherData] = useState("")

let data

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
      setweatherData(res.data)
      //checking the type of data in the weatherData variable
      console.log(typeof(weatherData));

      // trying to convert weatherData to JSON
      data = JSON.parse(weatherData)

      //checking the type of data in the data variable to check if it has been coverted to json
      console.log(typeof(data))
    }
    
    catch (error) {
      console.log(error.message);
    }

  }

  return ( 
    <>
    <div className='flex gap-4 w-1/2 m-auto justify-around mt-4'>
      <input className = 'w-4/6 bg-transparent border-b-2 border-teal-50 focus:outline-none' placeholdertype="text" onChange={(e) => { setCity(e.target.value); } } />

      <button className='font-poppins bg-teal-50 p-4 rounded-lg hover:bg-teal-100' onClick={getForecast}>Get Forecast</button>
    </div>
    {weatherData}
   
    </>
   );
}
 
export default App;
