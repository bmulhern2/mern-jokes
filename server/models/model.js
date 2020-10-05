let mongoose = require('mongoose')
let dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true }, function() {
    console.log("Database Connected")
})

let Schema = mongoose.Schema;
let ObjectId = mongoose.ObjectId;

let JokeSchema = new Schema({
    id: ObjectId,
    title: String,
    joke: String
})

module.exports = mongoose.model('Joke', JokeSchema)