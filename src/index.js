import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Home /> */}
      <Header />
      <App />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
