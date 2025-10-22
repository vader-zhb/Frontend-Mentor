

export const WeatherInfo = ({ detail }) => {
    return (<>
        <div className="weather-detail">
            <div className="weather-info">
                <div className="weather-info-left">
                    <span>{detail.address}</span>
                    <span>{detail.date}</span>
                </div>
                <div className="weather-info-right">
                    <img src={detail.temperatureLogo} alt="Temperature Icon" />
                    <span>{detail.temperature}</span>
                </div>
            </div>
            <div className="weather-detail-cards">
                <div className="detail-card-first">
                    <span className="detail-card-title">Feels like</span>
                    <span>{detail.feelTemperature}</span>
                </div>
                <DetailCard title={"Humidity"} value={detail.humidity} />
                <DetailCard title={"Wind"} value={detail.wind} />
                <DetailCard title={"Precipitation"} value={detail.precipitation} />
            </div>
        </div>
    </>);
}


const DetailCard = ({ title, value }) => {
    return (<>
        <div className="detail-card-second">
            <span className="detail-card-title">{title}</span>
            <span>{value}</span>
        </div>
    </>);
}




export const WeatherSpan = ({ high, low }) => {
    return (<>
        <div className="daily-forecast-span">
            <span>{high}°</span>
            <span>{low}°</span>
        </div>
    </>);
}

const WeatherCard = ({ weatherInfo }) => {
    return (<>
        <div className="daily-forecast">
            <div><span>{weatherInfo.day}</span></div>
            <img src={weatherInfo.icon} alt={weatherInfo.condition} />
            <WeatherSpan high={weatherInfo.high} low={weatherInfo.low} />
        </div>
    </>);
};

export default WeatherCard;