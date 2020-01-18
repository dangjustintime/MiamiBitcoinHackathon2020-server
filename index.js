// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/miami-bitcoin-hackathon';

// middleware
app.use(express.static('public'));
app.use(express.json());

// controllers


app.listen(PORT, () => {
	console.log('listening to port', PORT);
});

mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
	console.log('connected to mongoose');
})