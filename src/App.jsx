import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Questionnaire from './Routes/Questionnaire'
import Results from './Routes/Results'
import { useState } from 'react';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Questionnaire />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
