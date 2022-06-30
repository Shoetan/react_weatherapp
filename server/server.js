const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5001
// connfiguration for the api to use api to use.

app.use(cors());

app.use(express.json())

require('dotenv').config()


let data
// Function to get forecast details from the openweatherapi.







app.get('/', (req,res) =>{


  const getForecast = async ()=> {

  
    const choosenCity = req.query.userCity
    
     // connfiguration for the api to use api to use.
     const apiConfig = {
       method: 'GET',
       url: 'https://community-open-weather-map.p.rapidapi.com/weather', 
       
       params : {
         q: choosenCity,
         lat: '0',
         lon: '0',
         callback: 'test',
         id: '2172797',
         lang: 'null',
         units: 'imperial',
         mode: 'xml'    
       },
       headers: {
         'X-RapidAPI-Key': process.env.API_KEY,
         'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
       }
   
       }
  
  
       try {
           const response = await axios.request (apiConfig)
           data = response.data
           console.log(data);
       } catch (error) {
           console.log(error.message);
       }
   }

  res.send(data)




  getForecast()

  
}
  

)



app.listen(PORT, ( ) => {
    console.log(`Server running at http://localhost:${PORT}`)
});