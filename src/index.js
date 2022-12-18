import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes } from 'react-router-dom';
import DataFetcher from './DataFetcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <DataFetcher />
    {/* <Routes /> */}
  </React.StrictMode>
);