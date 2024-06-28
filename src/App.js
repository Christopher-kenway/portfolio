import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './home/Home'


function App() {
  return ( 
   
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
