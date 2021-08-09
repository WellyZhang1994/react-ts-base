import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

// install redux dev tools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

 const storeTree = createStore(rootReducer, composeEnhancers(
     applyMiddleware(thunk)
 ));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeTree}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
