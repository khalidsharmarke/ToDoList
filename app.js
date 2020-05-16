if (process.env.NODE_ENV !== 'production'){
	require('dotenv').config();
}
const express = require('express');
const app = express();

const router = require('./controller.js');
app.use(router);

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on('errrr', err => console.error(err))
mongoose.connection.once('open', () => console.log('connected to db'))

app.set('view engine', 'ejs');

// app.use(express.static(`${__dirname}/public`))

app.listen(process.env.PORT || 3000, () => console.log(`running server`))