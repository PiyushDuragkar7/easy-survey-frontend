// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateSurveyPage from './pages/CreateSurveyPage';
import EditSurveyPage from './pages/EditSurveyPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-survey" element={<CreateSurveyPage />} />
        <Route path="/edit-survey/:id" element={<EditSurveyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
