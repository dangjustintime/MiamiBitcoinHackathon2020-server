const express     = require('express');
const router      = express.Router();
const BlockCypher = require('../services/BlockCypher')
const Entity      = require('../models/entity');

// get address
router.get('/:address', async (request, response) => {
  try {
    const { address, txs, balance, total_received, total_sent } = await BlockCypher.getAddress(request.params.address)
    txs.map(async ( tx ) => {
      const { hash, total, outputs, inputs } = tx
      const to = await Entity.findManyByAddress(outputs.flatMap(o => o.addresses))
      console.log({ hash, total, to, inputs })
    })

    response.json({ address, txs, balance, total_received, total_sent });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
