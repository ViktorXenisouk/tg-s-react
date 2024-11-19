import './App.css';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import { Route,Routes } from 'react-router-dom';

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  return (
    <div className='App'>
      Header
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
