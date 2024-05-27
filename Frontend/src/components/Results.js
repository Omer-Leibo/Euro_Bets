import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Results = ({ token }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bets/results', {
          headers: { Authorization: token },
        });
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching results', error);
      }
    };

    fetchResults();
  }, [token]);

  return (
    <div>
      <h2>Your Bets</h2>
      <ul>
        {results.map((result) => (
          <li key={result._id}>
            Match ID: {result.matchId}, Bet: {result.bet}, Result: {result.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
