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
