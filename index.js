let mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/Livres", {useNewUrlParser: true})
let db = mongoose.connection

db.on('error', console.error.bind(console, 'erreur connexion :'));
db.once('open', function() {
console.log('Connecté DataBase')
});


var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())
// Router vers LivreRouter
var router = require('./App/Router/LivreRouter')

//Debug CORS Policy
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
         "Access-Control-Allow-Headers",
         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
         "Access-Control-Allow-Methods",
         "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
});
app.use('/',router);


router.get('/', function(req,res){
    res.send('API de gestion des livres')
})

/*
router.get('/livres', function(req,res){
    livre.find({}, {_id: 0})
    .then((livre) => {
    res.json(livre)
    .catch((err)=> console.log(err.message))

    })
})



router.get(`/livres/:numlivre/pages/:numpage`, function(req,res){
    const livres = biblio.filter( livre => livre.numero == req.params.numlivre )
    let page = livres[0].pages[req.params.numpage]

    if (page == null) {
        res.json("Erreur cette page n'existe pas")
    }

    res.json(page)
    res.send('Livres :' + livres + ' page : ' + pages)
})*/

/*
router.get(`/livres/:numlivre`, function(req,res){
    const livres = livre.filter( livre => livre.numero == req.params.numlivre )
    .then((livre) => {

    if (page == null) {
        res.json("Erreur cette page n'existe pas")
    }

    res.json(page)
    res.send('Livres :' + livres)
})})


router.post('/livre', function(req,res){
    biblio.push(req.body) 
    res.send('Ajout dun livres')
})

router.post('/livre', function(req,res){
    livre.push(req.body)
    .then((livre) => {
    res.json(livre)
    .catch((err)=> console.log(err.message))
})})

router.delete('/livres/:numlivre', function(req,res){

    let index = biblio.findIndex(livre => livre.numero == req.params.numlivre)
    console.log("index : " + index)
    biblio.splice(index, 1)
    res.send('Suppression livre n°' + req.params.numlivre)
})

router.put('/livres', function(req,res){
    res.send('Modification dun livres')
})

/*router.post('/livre', function(req,res){
    console.log(req.body)
    res.send("Ajout livre avec body-parser")
})*/


var port = 5000
app.listen(port)
console.log("Le server REST est lancé sur le port " + port)
