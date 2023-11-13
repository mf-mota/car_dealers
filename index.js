const express = require('express')
const app = express()
const engine = require('ejs-mate')
const path = require('path');
const carRoutes = require('./routes/cars')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/cars-dealers');


app.use('/cars', carRoutes)

app.use('*', (req, res) => {
    res.redirect('/cars')
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})


