const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const entitySchema = Schema({
	name: String,
	category: String,
	addresses: [{
		address: String,
		currency: String
	}]
});

entitySchema.statics.findManyByAddress = function (addresses) {
  return this.find({ addresses: { $elemMatch: { $in: addresses } } })
}

module.exports = mongoose.model('Entity', entitySchema);
