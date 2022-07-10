const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5001

app.use(cors());

app.use(express.json())

require('dotenv').config()




/* endpoint to get the weather forecast for a particular city using rapid api open weather api */

app.get('/', (req,res) => {

// receiving data from the front end. Remember accessing this endpoint with a get request and sending a query parameter with it LINE 31 app.jsx file
  const choosenCity = req.query.userCity
    


  const getForecast = async () => {


     // connfiguration for the api to use api to use.
     const apiConfig = {
       method: 'GET',
       url: 'https://community-open-weather-map.p.rapidapi.com/weather', 
       
       params : {

         q: choosenCity,
         lat: '0',
         lon: '0',
         id: '2172797',
         lang: 'null',
         units: 'metric',
            
       },
       headers: {
         'X-RapidAPI-Key': process.env.API_KEY,
         'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
       }
   
       }
  
  
       try {
           const response = await axios.request (apiConfig)
           const data = response.data
           res.json(data)
       }
       
       catch (error) {
           console.log(error.message);
       }
   }

  getForecast()

  
}
  

)


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});