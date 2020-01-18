const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entitySchema = Schema({
	name: String,
	private: Boolean,
	wallets: [{
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
	}]
});

const Entity = mongoose.model('Entity', entitySchema);

module.exports = Entity;