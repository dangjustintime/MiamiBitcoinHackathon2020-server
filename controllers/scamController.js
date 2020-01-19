const express = require('express');
const router = express.Router();
const Scam = require('../models/scam');

// get all scames
router.get('/', (request, response) => {
	Scam.find({}, (error, scam) => {
		if (error) {
			response.send(error);
		}
		response.json(scam);
	});
});

// get scam by id
router.get('/:id', (request, response) => {
	Scam.findById(request.params.id, (error, foundScam) => {
		if (error) {
			response.send(error);
		}
		response.json(foundScam);
	});
});

// get scam by address
router.get('/address/:address', (request, response) => {
	Scam.findOne({ address: request.params.address }, (error, foundScam) => {
		if (error) {
			response.send(error);
		}
		response.json(foundScam);
	});
});

// post scam
router.post('/', (request, response) => {
	const createdScam = new Scam(request.body);
	createdScam.save(error => {
		if (error) {
			response.send(error);
		}
	})
	response.status(201).json(createdScam);
});

// delete entity
router.delete('/:id', (request, response) => {
	Scam.findByIdAndDelete(request.params.id, (error, deletedScam) => {
		if (error) {
			response.send(error);
		}
		response.json(deletedScam);
	})
});

// delete scam by address
router.delete('/address/:address', (request, response) => {
	Scam.findOneAndDelete({ address: request.params.address }, (error, deletedScam) => {
		if (error) {
			response.send(error);
		}
		response.json(deletedScam);
	});
});

module.exports = router;