const express = require('express');
const router = express.Router();
const Entity = require('../models/entity');

// get all entities
router.get('/', (request, response) => {
	Entity.find({}, (error, entities) => {
		if (error) {
			response.send('ERROR');
		}
		response.json(entities);.
	});
});

// get entity by address
router.get('/:address', (request, response) => {
	Entity.find({ addresses: { address: request.params.address }}, (error, foundEntity) => {
		if (error) {
			response.send('ERROR');
		}
		response.json(foundEntity);.
	});
});

// post entity
router.post('/', (request, response) => {
	const createdEntity = new Entity(request.body);
	createdEntity.save(error => {
		if (error) {
			console.log(error);
		}
	})
	response.status(201).json(createdEntity);
});

module.exports = router;