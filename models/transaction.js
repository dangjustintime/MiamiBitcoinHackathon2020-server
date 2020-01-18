const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BTCTransactionSchema = Schema({
	hash: String,
	size: Number,
	addresses: [String],
	totalInput: Number,
	totalOutput: Number,
	totalFee: Number,
});

const BTCTransaction = mongoose.model('BTCTransaction', BTCTransactionSchema);

module.exports = BTCTransaction;