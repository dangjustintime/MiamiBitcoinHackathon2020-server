// dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/miami-bitcoin-hackathon';
const MongoClient = require('mongodb').MongoClient;
const URI = 'mongodb+srv://admin:admin@miamibitcoinhackathon2020-ox9xx.mongodb.net/test?retryWrites=true&w=majority'
const mongoClient = new MongoClient(URI, { useUnifiedTopology: true });

// middleware
app.use(express.static('public'));
app.use(express.json());

// controllers
const transactionController = require('./controllers/transactionController');
app.use('/transactions', transactionController);

// listen to port
app.listen(PORT, () => {
	console.log('listening to port', PORT);
});

// connect to database
mongoClient.connect((error, client) => {
	if (error) throw error;
	var db = client.db('cryptid');
	db.collection('transactions-wallets-entities').find().toArray(function (err, result) {
		if (err) throw err
		console.log(result)
	})
});

