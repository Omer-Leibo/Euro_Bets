import React, { useState } from 'react';
import axios from 'axios';

const SubmitBet = ({ token }) => {
  const [matchId, setMatchId] = useState('');
  const [bet, setBet] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/api/bets/submit',
        { matchId, bet },
        { headers: { Authorization: token } }
      );
      alert('Bet submitted!');
    } catch (error) {
      console.error('Error submitting bet', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Match ID" value={matchId} onChange={(e) => setMatchId(e.target.value)} required />
      <input type="text" placeholder="Your Bet" value={bet} onChange={(e) => setBet(e.target.value)} required />
      <button type="submit">Submit Bet</button>
    </form>
  );
};

export default SubmitBet;
