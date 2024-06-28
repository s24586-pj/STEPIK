import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import Sub from './components/Sub';
import Mul from './components/Mul';
import Div from './components/Div';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="add" element={<Add />} />
        <Route path="sub" element={<Sub />} />
        <Route path="mul" element={<Mul />} />
        <Route path="div" element={<Div />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
