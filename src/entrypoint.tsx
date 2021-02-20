import * as React from 'react';
import { render } from 'react-dom';
import { PragueWeatherCard, RedditF1Card } from '~/Cards';

const App: React.FunctionComponent = () => (
  <div className='container'>
    <PragueWeatherCard token={process.env.OPEN_WEATHER_TOKEN ?? ''}/>
    <RedditF1Card/>
  </div>
);

render(<App />, document.getElementById('app'));
