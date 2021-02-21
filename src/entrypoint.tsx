import * as React from 'react';
import { render } from 'react-dom';
import { RedditF1Card, WeatherCard } from '~/Cards';

const App: React.FunctionComponent = () => (
  <div className='container'>
    <WeatherCard city='Prague' token={process.env.OPEN_WEATHER_TOKEN ?? ''}/>
    <WeatherCard city='České Budějovice' token={process.env.OPEN_WEATHER_TOKEN ?? ''}/>
    <RedditF1Card/>
  </div>
);

render(<App />, document.getElementById('app'));
