import './styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import FetchTweets from './FetchTweets';
import reducer from './reducer';
import Tweets from './Tweets';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const Application = () => {
  return (
    <div className="Application">
      <h1>Tweet Stream</h1>
      <FetchTweets />
      <Tweets />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement,
);
