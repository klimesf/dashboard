import * as React from 'react';
import { render } from 'react-dom';
import { RedditCard, TogglCard, WeatherCard } from '~/Cards';

const openWeatherToken = process.env.OPEN_WEATHER_TOKEN ?? '';
const togglToken = process.env.TOGGL_TOKEN ?? '';

const App: React.FunctionComponent = () => (
  <div className='container'>
    <WeatherCard city='Prague' token={openWeatherToken}/>
    <WeatherCard city='České Budějovice' token={openWeatherToken}/>
    <TogglCard token={togglToken}/>
    <RedditCard subreddit='formula1'/>
    <RedditCard subreddit='wallstreetbets'/>
  </div>
);

render(<App />, document.getElementById('app'));
