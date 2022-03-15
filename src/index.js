import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//incluindo o redux
import {createStore} from 'redux';
import postReducer from './store/reducers/postReducer';
import {Provider} from 'react-redux';

// pegando os dados do postReducer e passando como parâmetros para o createStore
const store = createStore(postReducer);

//o store passa os dados para as paginas renderizadas, fazendo assim uma reação em cadeia.
// store se torna props nas páginas filhas
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
