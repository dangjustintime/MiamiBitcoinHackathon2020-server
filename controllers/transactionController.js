const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// get all transactions
router.get('/', (request, response) => {
	Transaction.find({}, (error, transactions) => {
		if (error) {
			response.send('ERROR');
		}
		response.json(transactions);
	});
});

// post transaction
router.post('/', (request, response) => {
	const createdTransaction = new Transaction(request.body);
	console.log('^^^^', request.body);
	createdTransaction.save(error => {
		if (error) {
			console.log(error);
		}
	})
	response.status(201).json(createdTransaction);
});

module.exports = router;