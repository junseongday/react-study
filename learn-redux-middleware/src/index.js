import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer, { rootSaga } from './modules'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk.withExtraArgument({history}), sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
