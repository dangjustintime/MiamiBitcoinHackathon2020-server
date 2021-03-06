const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = Schema({
	address: String,
	balance: Number,
	currency: String,
	transactions: [{
		hash: String,
		addresses: [String],
	}]
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;