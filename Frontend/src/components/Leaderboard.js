import React from 'react';

const Leaderboard = () => {
  // Placeholder data for the leaderboard
  const leaderboard = [
    { username: 'user1', points: 10 },
    { username: 'user2', points: 8 },
    { username: 'user3', points: 6 },
  ];

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={index}>
            {user.username}: {user.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
