import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SubmitBet from './components/SubmitBet';
import Results from './components/Results';
import Leaderboard from './components/Leaderboard';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<div>HELLO WORLD</div>} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/submit-bet" element={<SubmitBet token={token} />} />
          <Route path="/results" element={<Results token={token} />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
