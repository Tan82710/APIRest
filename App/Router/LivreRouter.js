let express = require('express')
let routerLivres = express.Router()
let livresController = require('../Controller/LivreControllerl')

routerLivres.get('/livres', livresController.liste)
routerLivres.get (`/livres/:numlivre`, livresController.livre)
routerLivres.get (`/livres/:numlivre/pages/:numpage`, livresController.page)
routerLivres.get (`/livres/:numlivre/pages`, livresController.pages)
routerLivres.post (`/livres`, livresController.addLivre)
routerLivres.delete (`/livres/:numlivre`, livresController.deleteLivre)
routerLivres.put (`/livres/:numlivre`, livresController.putLivre)

module.exports = routerLivres