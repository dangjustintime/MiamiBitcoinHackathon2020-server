// dependencies
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI || 'mongodb+srv://admin:admin@miamibitcoinhackathon2020-ox9xx.mongodb.net/cryptid?retryWrites=true&w=majority'

// middleware
app.use(express.static('public'));
app.use(express.json());

// controllers
const transactionController = require('./controllers/transactionController');
app.use('/transactions', transactionController);
const walletController = require('./controllers/walletController');
app.use('/wallets', walletController);
const addressController = require('./controllers/addressController');
app.use('/address', addressController);

// listen to port
app.listen(PORT, () => {
	console.log('listening to port', PORT);
});

// connect to database
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log('database connected');
});
