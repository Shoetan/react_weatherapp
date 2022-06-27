import { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

  const [city, setCity] = useState('')

  const getForecast = async () => {

    try {
      const res =  await axios.get('http://localhost:5001/')
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }

  }




  return ( 
    <>
    <div>
      <input type="text" onChange={(e) => { setCity(e.target.value); } } />
      {city}
    </div>
    <button onClick={getForecast}>Get Forecast</button>
    </>
   );
}
 
export default App;
