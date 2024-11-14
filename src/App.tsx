import { useEffect } from 'react';
import './App.css';
import useTelegram from './components/hooks/useTelegram';
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form'

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  const telegram = useTelegram();

  useEffect(() => {
    telegram.tg.ready();
  })

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path='form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
