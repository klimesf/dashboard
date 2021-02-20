import * as React from 'react';
import { render } from 'react-dom';
import { RedditF1Card } from '~/Cards';

const App: React.FunctionComponent = () => (
  <div className='container'>
    <RedditF1Card></RedditF1Card>
  </div>
);

render(<App />, document.getElementById('app'));
