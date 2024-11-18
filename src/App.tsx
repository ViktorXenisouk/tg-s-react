import './App.css';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  return (
    <div className='App'>
      <ProductList/>
      <Form/>
      libhlbi
    </div>
  );
}

export default App;
