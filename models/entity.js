const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entitySchema = Schema({
	name: String,
	category: String,
	addresses: [{
		address: String,
		type: String
	}]
});

const Entity = mongoose.model('Entity', entitySchema);

module.exports = Entity;