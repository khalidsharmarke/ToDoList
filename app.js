const PORT = process.env.port || 3000;

const path = require('path');
const express = require('express');

const app = express();
const router = require('./routes/router.js')

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

// i dont know middleare - plz study
// app.use(router)

app.listen(PORT, () => console.log(`running: ${PORT}`))