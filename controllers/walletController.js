const express = require('express');
const router = express.Router();
const Wallet = require('../models/wallet');

// get all wallets
router.get('/', (request, response) => {
	Wallet.find({}, (error, wallets) => {
		if (error) {
			response.send('ERROR');
		}
		response.json(wallets);
	});
});

// get wallet
router.get('/:address', (request, response) => {
	Wallet.findOne({ address: request.params.address }, (error, foundWallet) => {
		if (error) {
			response.send('ERROR');
		}
		response.json(foundWallet);
	})
});

// post transaction
router.post('/', (request, response) => {
	const createdWallet = new Wallet(request.body);
	createdWallet.save(error => {
		if (error) {
			console.log(error);
		}
	})
	response.status(201).json(createdWallet);
});

module.exports = router;