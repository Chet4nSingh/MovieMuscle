const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
        name: String,
        description: String,
        starcast: [String],
        rating: Number,
        image: String
})

module.exports = new mongoose.model('Movie', movieSchema);