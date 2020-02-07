let mongoose = require('mongoose')
mongoose.Promise = global.Promise

let Schema = mongoose.Schema
let livreSchema = new Schema ({
    numero : Number,
    titre : String, 
    pages : [String]
})

var LivreModel = mongoose.model("livre", livreSchema)

module.exports = LivreModel
