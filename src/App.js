// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './HomePage'; // Sua página principal
// import TestPage from './TestPage'; // Sua nova página de testes
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
