import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Search from './search';
import WeatherDetails from './weather'; 
function App() {
  return (
    <div className="App">
      <h1 className='header'></h1>
      <Router>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path="/weather/:cityName" element={<WeatherDetails />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
