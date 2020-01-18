const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = Schema({
	hash: String,
	addresses: [String],
});

const BTCTransaction = mongoose.model('BTCTransaction', BTCTransactionSchema);

module.exports = BTCTransaction;