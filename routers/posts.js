// Importiamo express una volta che lo installiamo 
const express = require('express')
const router = express.Router();

// BONUS IMPORTIAMO DATA/POSTS
const data = require("../data/posts")


// INDEX VISUALIZZA TUTTI GLI ELEMENTI CON .GET 
router.get("/", function (req,res){
    
    // BONUS RESTITUISCO IN FORMATO JSON L ARRAY DI OGGETTI
    res.json(data)
})


// SHOW VISUALIZZA UN ELEMENTO CON .GET 
router.get("/:id", function (req,res){
    
    // BONUS RESTITUISCO UN SINGOLO ELEMENTO IN FORMATO JSON 
    res.json(data[req.params.id])
})


// STORE CREA UN NUOVO ELEMENTO CON .POST
router.post("/", function (req,res){
    res.send("Creazione nuova lista")
})



// UPDATE MODIFICA INTERAMENTE L ELEMENTO  CON .PUT
router.put("/:id", function (req,res){
    res.send("Modifica intera della lista" + req.params.id )
})



// DELETE ELIMINA UN ELEMENTO CON .DELETE
router.delete("/:id", function (req,res){
    res.send("Cancellazione del post" + req.params.id )
})

module.exports = router