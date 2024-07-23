import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home'


function App() {
  return ( 
   
    <div className="App min-h-full">
      <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
