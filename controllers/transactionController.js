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
	Transaction.findByIdAndUpdate(request.params.id, { category: request.body.category }, (error, categorizedTransaction) => {
		if (error) {
			response.send(error);
		}
		response.json(categorizedTransaction);
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

// delete transaction
router.delete('/:id', (request, response) => {
	Transaction.findByIdAndDelete(request.params.id, (error, deletedTransaction) => {
		if (error) {
			response.send(error);
		}
		response.json(deletedTransaction);
	});
})

module.exports = router;