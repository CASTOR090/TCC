import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../index.html'
import React from 'react';
import Login from './components/Login'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
