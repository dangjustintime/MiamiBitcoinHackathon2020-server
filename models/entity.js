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
			addresses: [String],
		}]
	}]
});

const Entity = mongoose.model('Entity', entitySchema);

module.exports = Entity;