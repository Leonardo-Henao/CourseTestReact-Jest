import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
// import App from './HelloWorldApp'
// import CounterApp from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value={3} /> */}
    {/* <App titulo="Titulo de las props" /> */}
    <FirstApp></FirstApp>
  </React.StrictMode>,
);
