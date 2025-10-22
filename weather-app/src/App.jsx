import './style.css'
import WeatherCard, { WeatherSpan, WeatherInfo } from './components/DailyForcast'

function App() {
  const dailyForcast = {
    day: "Tue",
    icon: "./src/assets/images/icon-sunny.webp",
    high: 25,
    low: 15
  };
  const dailyArr = [
    dailyForcast, dailyForcast, dailyForcast, dailyForcast, dailyForcast, dailyForcast, dailyForcast
  ];

  const weatherDetail = {
    feelTemperature: "18°",
    humidity: "60%",
    wind: "15 km/h",
    precipitation: "15 mm",
    address: "Berlin, Germany",
    date: "Tuesday, Aug 5, 2025",
    temperature: "18°",
    temperatureLogo: "./src/assets/images/icon-sunny.webp"
  };


  return (
    <>
      <div className='main-content'>


        <div className='weather-detail-left'>
          <WeatherInfo detail={weatherDetail} />
          <div className='daily-forecast-total'>
            <span>Daily Forecast</span>
            <div className='daily-forecast-arr'>
              {dailyArr.map((item, index) => (<WeatherCard key={index} className="daily-forecast" weatherInfo={item} />))}
            </div>
          </div>
        </div>
        <div className='weather-detail-right'>
          <div className='weather-detail-right-title'>
            <span>Hourly Forecast</span>
            <choice className='choice'>Today</choice>
          </div>
          <div className='hourly-forecast'>
              {dailyArr.map((item, index) => (
                <div key={index} className='hourly-forecast-item'>
                  <span>Now</span>
                  <img src={item.icon} alt={item.condition} />
                  <WeatherSpan high={item.high} low={item.low} />
                </div>
              ))}
            </div>
        </div>
      </div>

    </>
  )
}

export default App
