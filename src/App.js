import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainState from './context/mainState';
import Routers from './routers/routers';

function App() {
  return (
    <div className="App">
      <MainState>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </MainState>
    </div>
  );
}

export default App;
