const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// get all transactions
router.get('/', (request, response) => {
	Transaction.find({}, (error, transactions) => {
		if (error) {
			response.send(error);
		}
		response.json(transactions);
	});
});

// categorize transactions
router.put('/categorize/:id', (request, response) => {
	Transaction.findByIdAndUpdate(request.params.id, { category: request.body }, (error, categorizedTransaction) => {
		if (error) {
			response.send(error);
		}
		response.json(categorizedTransactions);
	})
});

// post transaction
router.post('/', (request, response) => {
	const createdTransaction = new Transaction(request.body);
	createdTransaction.save(error => {
		if (error) {
			response.send(error);
		}
	})
	response.status(201).json(createdTransaction);
});

module.exports = router;