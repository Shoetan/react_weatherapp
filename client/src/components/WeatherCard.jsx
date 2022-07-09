/* 
  Weather card component to display weather details
 */

const WeatherCard = ({weatherTemp, weatherIcon, weatherDescription}) => {
    return (
        <div>
            {/* weathercard to display details of weather from selected city */}
                <div className="flex flex-col w-3/6 mx-auto  bg-slate-400 mt-6 rounded-md justify-center items-center font-poppins">

            {/* current weather temperature */}
            <div className='mt-6'>
                <h2>{weatherTemp} <sup>&deg;</sup>C</h2>
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
        </div>
      );
}
 
export default WeatherCard;