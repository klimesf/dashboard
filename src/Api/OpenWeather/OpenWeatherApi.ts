import { api } from '~/Api';
import { OpenWeatherResponse } from '~/Api/OpenWeather/OpenWeatherResponse';

export const readWeather = async (city: string, token: string): Promise<OpenWeatherResponse> => {
  const response = await api<OpenWeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`,
  );
  return response;
};
