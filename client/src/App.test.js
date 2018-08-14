import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { browserHistory, Router } from 'react-router';
import routes from '../../routes/testfile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  <Router history={browserHistory} routes={routes} />;
  
});

