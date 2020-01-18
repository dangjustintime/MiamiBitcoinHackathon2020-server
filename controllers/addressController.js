const express = require('express');
const router = express.Router();

// get address
router.get('/:address', async (request, response) => {
	try {
		const blockCypherResponse = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${request.params.address}`);
		const blockCypherResponseJson = await blockCypherResponse.json();
		response.json(blockCypherResponseJson);
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;