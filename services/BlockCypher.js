const axios  = require('axios');

module.exports = {
  async getAddress (address) {
    try {
      // const blockCypherResponse = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${ address }/full?before=300000`);
      const blockCypherResponse = await require('./test')
      return blockCypherResponse.data
    } catch (e) {
      console.log(e);
    }
  }
}
