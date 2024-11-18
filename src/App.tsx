import './App.css';
import Form from './components/Form/Form';

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  return (
    <div className='App'>
      <Form/>
      libhlbi
    </div>
  );
}

export default App;
