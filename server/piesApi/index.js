require('dotenv').config();

const express = require('express');
const app = express();

const pie = require('./controllers/piescontroller')

app.use(express.static(__dirname + '/public'))
console.log(__dirname)

app.get('/', (req, res) => res.render('index'))

app.use('/pies', pie)

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`))
