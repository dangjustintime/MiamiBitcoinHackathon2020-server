// dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/miami-bitcoin-hackathon';
const MongoClient = require('mongodb').MongoClient;
const URI = 'mongodb+srv://admin:admin@miamibitcoinhackathon2020-ox9xx.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient(URI, { useNewParser: true, useUnifiedTopology: true });

// middleware
app.use(express.static('public'));
app.use(express.json());

// controllers

// listen to port
app.listen(PORT, () => {
	console.log('listening to port', PORT);
});

// connect to database
client.connect((error) => {
	if (error) {
		return console.log(error);
	}
	const collection = client.db("sample_airbnb").collection("listingsAndReviews");
	console.log('!!! connected to database', collection);
});

