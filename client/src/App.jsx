import axios from 'axios'

import { useState } from 'react'

const App = () => {

const [ city, setCity] = useState("")

const getForecast = async () => {

    const config ={
      method : 'GET',
      url : 'http://localhost:5001/',
      params : {
         userCity : city
      }
    }

    try {
      const res =  await axios.request(config)
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }

  }

  return ( 
    <>
    <div className='flex gap-4 w-1/2 m-auto justify-around mt-4'>
      <input className = 'w-4/6 bg-transparent border-b-2 border-teal-50 focus:outline-none' placeholdertype="text" onChange={(e) => { setCity(e.target.value); } } />
      {city}
      <button className='font-poppins bg-teal-50 p-4 rounded-lg hover:bg-teal-100' onClick={getForecast}>Get Forecast</button>
    </div>
   
    </>
   );
}
 
export default App;
