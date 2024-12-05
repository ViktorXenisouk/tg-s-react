import './App.css';
import ProductList from './components/Pages/ProductListPage/ProductListPage';
import Form from './components/Pages/FormPage/FormPage';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { GiftBuyPage } from './components/Pages/GiftBuyPage/GiftBuyPage';

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/gift/:id' element={<GiftBuyPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
