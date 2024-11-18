import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import { Routes,Route } from 'react-router-dom';

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  return (
    <Routes>
      <Route index element={<ProductList/>}/>
      <Route path="/form" element={<Form/>}/>
    </Routes>
  );
}

export default App;
