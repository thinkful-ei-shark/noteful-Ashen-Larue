import React from 'react';
import './App.css';
import { Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default function App(){
  return(
    <Router>
      <main>
        <nav>
          <ul>
          </ul>
        </nav>
    <Route path="/" render={() => <h1>Noteful</h1>} />
      </main>
    </Router>
  );
}


