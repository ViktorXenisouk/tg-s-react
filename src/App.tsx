import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import { Routes, Route } from 'react-router-dom';

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  return (
    <div className='App'>
      <ProductList />
      <Form />
    </div>
  );
}

export default App;
