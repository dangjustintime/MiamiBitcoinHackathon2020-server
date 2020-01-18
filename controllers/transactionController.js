const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// get all transactions
router.get('/', (request, response) => {
	Transaction.find({}, (error, allTransactions) => {
		response.json(allTransactions);
	});
});

module.exports = router;