const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const Movie = require('./models/movies');

mongoose.connect('mongodb://127.0.0.1:27017/movieSearch')
    .then(() => {
        console.log('mongoose connection successful');
    })
    .catch((err) => {
        console.log('ERROR!!! mongoose not connected');
    });

app.engine('ejs', ejsMate);
app.set('path', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/movies', async (req, res) => {
    const movies = await Movie.find({});
    res.render('movies/index', { movies });
})

app.listen(3000, () => {
    console.log('listening...');
})