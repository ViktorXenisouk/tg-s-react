import React, { useEffect } from 'react';
import './App.css';

declare global {
  interface Window {
      Telegram: any;
  }
}

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  })

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      work
      <button onClick={onClose}>close</button>
 
    </div>
  );
}

export default App;
