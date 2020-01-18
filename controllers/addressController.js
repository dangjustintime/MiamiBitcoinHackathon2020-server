const express = require('express');
const router = express.Router();
const axios = require('axios');

// get address
router.get('/:address', async (request, response) => {
	try {
		const blockCypherResponse = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${request.params.address}/full?before=300000`);
		// const blockCypherResponseJson = await blockCypherResponse;
		console.log('&&&&&&', blockCypherResponse.data);
		response.json(blockCypherResponse.data);
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;