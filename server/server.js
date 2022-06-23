const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const { response } = require('express');

const app = express();

app.use(cors());

require('dotenv').config()

const port = 5001


const apiConfig = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: 'London,uk',
      lat: '0',
      lon: '0',
      callback: 'test',
      id: '2172797',
      lang: 'null',
      units: 'imperial',
      mode: 'xml'
    },
    headers: {
      'X-RapidAPI-Key': '01b6f99954msh2b2ae87b6375022p1c2376jsnaa8a0702eb72',
      'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
    }
  };

const getForecast = async ()=>{
    try {
        const data = await axios.request (apiConfig)
        console.log(data.data.value);
    } catch (error) {
        console.log(error.message);
    }
}

getForecast()







app.get('/', (req,res) =>{
 
})
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
});