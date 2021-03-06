const express = require('express');
const router = express.Router();
const Entity = require('../models/entity');

// get all entities
router.get('/', (request, response) => {
	Entity.find({}, (error, entities) => {
		if (error) {
			response.send(error);
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
			response.send(error);
		}
	})
	response.status(201).json(createdEntity);
});

// assign entity to transaction
router.put('/assign/:id', (request, response) => {
	Entity.findByIdAndUpdate(request.params.id, { $push: { addresses: request.body } }, (error, assignedEntity) => {
		if (error) {
			response.send(error);
		}
		response.send(assignedEntity);
	})
});

// delete entity
router.delete('/:id', (request, response) => {
	Entity.findByIdAndDelete(request.params.id, (error, deletedEntity) => {
		if (error) {
			response.send(error);
		}
		response.json(deletedEntity);
	})
});
module.exports = router;