const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// get all transactions
router.get('/', (request, response) => {
	var query = Transaction.find({});
	response.send(query);
});

// post transaction
router.post('/', (request, response) => {
	const createdTransaction = new Transaction(request.body);
	createdTransaction.save(error => {
		if (error) {
			console.log(error);
		}
	})
	response.status(201).json(createdTransaction);

	// Transaction.create(request.body, (error, createdTransaction) => {
	// 	if (error) {
	// 		console.log(error);
	// 	}
	// 	response.status(201).json(createdTransaction)
	// });
	// response.send('SUCCESS');
});

module.exports = router;