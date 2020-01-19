const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
	hash: String,
	addresses: [String],
	entityId: String,
	to: [String],
	from: [{
		name: String,
		category: String,
		addresses: [{
			address: String,
			currency: String
		}]
	}],
	category: String,
	batch: Boolean,
	total: Number
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;