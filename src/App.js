import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import TestPageRef from './TestPageRef';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test-ref" element={<TestPageRef />} />
      </Routes>
    </Router>
  );
}

export default App;
