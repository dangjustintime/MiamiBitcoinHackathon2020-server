const express = require('express');
const router = express.Router();
const axios = require('axios');

// get address
router.get('/', (request, response) => {
	response.send('Miami Bitcoin Hackathon 2020');
});

module.exports = router;
