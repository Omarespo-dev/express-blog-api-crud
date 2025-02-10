// Importiamo express una volta che lo installiamo 
const express = require('express')
const router = express.Router();

// Importiamo postcontroller 
const postcontroller =require("../controllers/postsController")


// INDEX VISUALIZZA TUTTI GLI ELEMENTI CON .GET 
router.get("/", postcontroller.index)


// SHOW VISUALIZZA UN ELEMENTO CON .GET 
router.get("/:id", postcontroller.show)


// STORE CREA UN NUOVO ELEMENTO CON .POST
router.post("/", postcontroller.store)



// UPDATE MODIFICA INTERAMENTE L ELEMENTO  CON .PUT
router.put("/:id", postcontroller.update)



// DELETE ELIMINA UN ELEMENTO CON .DELETE
router.delete("/:id", postcontroller.destroy)



module.exports = router