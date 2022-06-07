import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainState from './context/mainState';
import Routers from './routers/routers';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainState>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </MainState>
    </div>
  );
}

export default App;
