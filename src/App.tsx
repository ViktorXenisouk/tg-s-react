import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  return (
    <div className="App">
    <ProductList/>
    </div>
  );
}

export default App;
