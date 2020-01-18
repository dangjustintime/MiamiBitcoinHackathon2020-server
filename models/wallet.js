const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = Schema({
	address: String,
	balance: Number,
	type: String,
	btcTransactions: [{
		hash: String,
		addresses: [String],
	}]
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;