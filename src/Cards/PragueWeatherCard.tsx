import * as React from 'react';
import { api } from '~/Api';

export interface OpenWeatherResponse {
  readonly main: WeatherDataResponse;
  readonly sys: WeatherSysResponse;
  readonly weather: [WeatherResponse];
}

export interface WeatherDataResponse {
  readonly feels_like: number;
  readonly humidity: number;
  readonly pressure: number;
  readonly temp: number;
  readonly temp_max: number;
  readonly temp_min: number;
}

export interface WeatherSysResponse {
  readonly country: string;
  readonly id: number;
  readonly sunrise: number;
  readonly sunset: number;
  readonly type: number;
}

export interface WeatherResponse {
  readonly description: string;
  readonly icon: string;
  readonly id: number;
  readonly main: string;
}

interface Weather {
  readonly feelsLike: number;
  readonly humidity: number;
  readonly sunrise: string;
  readonly sunset: string;
  readonly temp: number;
  readonly weather: string;
}

const readWeather = async (token: string): Promise<OpenWeatherResponse> => {
  const response = await api<OpenWeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=Prague&appid=${token}&units=metric`,
  );
  return response;
};

const timestampToTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;

  return `${hours}:${minutes.substr(-2)}`;
};

export const PragueWeatherCard: React.FunctionComponent<{token: string}> = ({token}) => {
  const [weather, setWeather] = React.useState<Weather | undefined>(undefined);

  const loadWeather = async () => {
    const weather = await readWeather(token);
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
      <h3>Prague ⛅</h3>
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
