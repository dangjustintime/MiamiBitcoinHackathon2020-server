const express = require('express');
const router = express.Router();
const Entity = require('../models/entity');

// get all entities
router.get('/', (request, response) => {
	Entity.find({}, (error, entities) => {
		if (error) {
			response.send('ERROR');
		}
		response.json(entities);
	});
});

// get entity by address
router.post('/address', (request, response) => {
	Entity.find({}, { addresses: { $elemMatch: {$in: request.body.addresses} } }, (error, foundEntities) => {
		if (error) {
			response.send(error);
		}
		response.json(foundEntities);
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

// delete entity
router.delete('/:id', (request, response) => {
	Entity.findOneAndDelete({})
	const createdEntity = new Entity(request.body);
	createdEntity.save(error => {
		if (error) {
			console.log(error);
		}
	})
	response.status(201).json(createdEntity);
});
module.exports = router;