const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = Schema({
	address: String,
	balance: Number,
	type: String,
	btcTransactions: [{
		hash: String,
		size: Number,
		addresses: [String],
		totalInput: Number,
		totalOutput: Number,
		totalFee: Number,
	}]
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;