import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js';
import Page1 from './pages/Page1.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} /> 
        <Route path={'/page1'} element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;