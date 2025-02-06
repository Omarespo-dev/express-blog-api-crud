//  IMPORTIAMO DATA/POSTS PERCHE ANDIAMO A SEPARARE LA LOGICA DAL FILE /ROUTERS/POSTS DOVE GESTIAMO LE DIVERSE RICHIESTE E LA AGGIUGIAMO QUI CON DELLE FUNZIONI CHE ANDREMO A RICHIAMARE IN ROUTER
const data = require("../data/posts");


// ADDIAMO LE FUNZIONI 

// LA PRIMA E PER L INDEX
function index(req,res){
    // BONUS RESTITUISCO IN FORMATO JSON L ARRAY DI OGGETTI
    res.json(data)
}

// LA SECONDA E PER SHOW
function show(req,res){
    // BONUS RESTITUISCO UN SINGOLO ELEMENTO IN FORMATO JSON 
    res.json(data[req.params.id])
}


// LA TERZA E PER STORE
function store(req,res){
    res.send("Creazione nuova lista")
}

// LA QUARTA E PER UPDATE
function update(req,res){
    res.send("Modifica intera della lista" + req.params.id )
}


// LA QUINTA E PER DELETE
function destroy(req,res){
    res.send("Cancellazione del post" + req.params.id )
}

// Esportiamo il file controller 
module.exports = {index,show,store,update,destroy}