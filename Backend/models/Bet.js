const mongoose = require('mongoose');

const BetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  matchId: { type: String, required: true },
  bet: { type: String, required: true },
  result: { type: String, default: null },
});

module.exports = mongoose.model('Bet', BetSchema);
