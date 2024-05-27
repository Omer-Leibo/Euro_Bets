const express = require('express');
const Bet = require('../models/Bet');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/submit', auth, async (req, res) => {
  const { matchId, bet } = req.body;
  
  try {
    const newBet = new Bet({ user: req.user.userId, matchId, bet });
    await newBet.save();
    res.status(201).send('Bet submitted');
  } catch (error) {
    res.status(500).send('Error submitting bet');
  }
});

router.get('/results', auth, async (req, res) => {
  try {
    const bets = await Bet.find({ user: req.user.userId });
    res.json(bets);
  } catch (error) {
    res.status(500).send('Error fetching results');
  }
});

module.exports = router;
