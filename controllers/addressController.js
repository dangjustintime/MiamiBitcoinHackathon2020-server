const express     = require('express');
const router      = express.Router();
const axios       = require('axios');
const BlockCypher = require('../services/BlockCypher')

// get address
router.get('/:address', async (request, response) => {
  try {
    const { address, txs, balance, total_received, total_sent } = await BlockCypher.getAddress(request.params.address)
    // debugger
    response.json({ address, txs, balance, total_received, total_sent });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
