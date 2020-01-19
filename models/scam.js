const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScamSchema = new Schema({
	address: String,
	description: String,
	scamType: String
});

const Scam = mongoose.model('Scam', ScamSchema);

module.exports = Scam;