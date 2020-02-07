let LivreModel = require('../Model/LivreModel')

let LivresController = {

    // méthode qui renvoie la liste des livres
    liste : function(req, res) { 
        LivreModel.find(function(err,livres) {
        if (err) { 
            console.log(err);
        res.json({ status : false, message: err.message}); 
    }else { 
        res.json({ status : true, livres : livres}); 
    } 
});       
},   
    //renvoie un livre précis avec ses informations
    livre : function(req, res) {
        LivreModel.find( {numero : req.params.numlivre}, {})

        .then((livres) => {

        if (livres == null) {
            res.json("Erreur ce livre n'existe pas")
        }
    
        res.json(livres)
    
    }    
)},
    //renvoie la page précise d'un livre
    page : function(req, res) {

        LivreModel.findOne({numero : req.params.numlivre}, {})

        .then((livre) => {
            let pages = livre.pages
            console.log(pages)
            console.log(req.params.numpage)

            if(pages.length-1 >= req.params.numpage) {
                
                res.json(pages[req.params.numpage])
            }
                res.json("Erreur cette page n'existe pas")
        }
    )},
    //renvoie toutes les pages d'un livre
    pages : function(req, res) {

        LivreModel.find({numero : req.params.numlivre}, {})

        .then((livre) => {
        console.log(livre[0].pages)
            if(livre[0].pages.length-1 == null) {
                
                res.json("Aucune page")
            }
                res.json(livre[0].pages)
        }
    )},
    //Ajoute un livre 
    addLivre : function(req, res) {
        var livre = new LivreModel ({
            numero : req.body.numero,
            titre : req.body.titre,
            pages : req.body.pages
        })
        livre.save()
        .then((livre) =>
        res.send(livre))
        .catch((err) => err.message) 
    },
    //Suppprime un livre
    deleteLivre : function(req, res) {
        LivreModel.deleteOne({numero : req.params.numlivre})
        .then((status) => {
            if(status.n == 0){
                res.json("Erreur, ce livre n'existe pas")
            }else {
                res.json('Livre supprimé')
            }
        })
    },
    //Modifie un livre
    putLivre : function(req, res) {
        LivreModel.updateOne({numero: req.params.numlivre}, req.body)
        .then((status) => {
            if(status == 0){
                res.json('Erreur de modification')
            }else{
                res.json('Modification du Livre avec succès')
            }
        })
    }

}

// interface du module
module.exports = LivresController;