const mongoose = require('mongoose');
const Movie = require('../models/movies')
const { names, descriptions, starcast, ratings } = require('./movieSeeds');

mongoose.connect('mongodb://127.0.0.1:27017/movieSearch')
.then(() => {
    console.log('mongoose connection successful');
})
.catch((err) => {
    console.log('ERROR!!! mongoose not connected');
});

const seedDB = async () => {
    await Movie.deleteMany({});
    for (let i = 0; i < 20; i ++) {
        const movie = new Movie({
        name: names[i], 
        description: descriptions[i], 
        starcast: starcast[i], 
        rating: ratings[i],
        image: "https://source.unsplash.com/collection/484351"
        });
        
        await movie.save();
    }
}

seedDB().then(() => mongoose.connection.close());










