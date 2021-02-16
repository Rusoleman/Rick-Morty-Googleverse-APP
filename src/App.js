import React from 'react';
import LocationContainer from './components/LocationContainer'
import './components/Location-style.css';
import './App.css';


function App() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="title">
          <h1>GOOGLEVERSE-MAPS</h1>
        </div>
        <header className="App-header">
          <LocationContainer/>
        </header>
      </div>
    </div>
  );
}

export default App;
