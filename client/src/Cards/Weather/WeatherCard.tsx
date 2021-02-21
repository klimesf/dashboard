import * as React from 'react';
import { readWeather } from '~/Api/OpenWeather';
import { timestampToTime } from '~/Utils';

interface Weather {
  readonly feelsLike: number;
  readonly humidity: number;
  readonly sunrise: string;
  readonly sunset: string;
  readonly temp: number;
  readonly weather: string;
}

export const WeatherCard: React.FunctionComponent<{city: string; token: string}> = ({city, token}) => {
  const [weather, setWeather] = React.useState<Weather | undefined>(undefined);

  const loadWeather = async () => {
    const weather = await readWeather(city, token);
    setWeather({
      feelsLike: weather.main.feels_like,
      humidity: weather.main.humidity,
      sunrise: timestampToTime(weather.sys.sunrise),
      sunset: timestampToTime(weather.sys.sunset),
      temp: weather.main.temp,
      weather: weather.weather.map((line) => line.main).join(', '),
    });
  };

  React.useEffect(() => {
    loadWeather();
  }, []);

  return (
    <div className='card weather'>
      <h3>{city} ⛅</h3>
      <button onClick={() => { loadWeather(); }}>refresh</button>
      <hr/>
      <div className='temp'>{weather?.temp.toFixed()}°C <span>(feels like {weather?.feelsLike.toFixed()}°C)</span></div>
      <div className='desc'>{weather?.weather}</div>
      <div className='row'>
        <div className='left'><span>humidity:</span> {weather?.humidity} % &nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div className='right'><span>sun:</span> {weather?.sunrise} <span>/</span> {weather?.sunset}</div>
      </div>
    </div>
  );
};
