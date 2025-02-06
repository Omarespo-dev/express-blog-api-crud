//  IMPORTIAMO DATA/POSTS PERCHE ANDIAMO A SEPARARE LA LOGICA DAL FILE /ROUTERS/POSTS DOVE GESTIAMO LE DIVERSE RICHIESTE E LA AGGIUGIAMO QUI CON DELLE FUNZIONI CHE ANDREMO A RICHIAMARE IN ROUTER
const posts = require("../data/dataPosts");


// ADDIAMO LE FUNZIONI 

// LA PRIMA E PER L INDEX
function index(req,res){
    // BONUS RESTITUISCO IN FORMATO JSON L ARRAY DI OGGETTI
    res.json(posts)
}

// LA SECONDA E PER SHOW
function show(req,res){
    // BONUS RESTITUISCO UN SINGOLO ELEMENTO IN FORMATO JSON 
    
    // RECUPERIAMO ID DAL URL  E IMPOSTIAMOLO COME NUMERO INTERO
    const id = parseInt(req.params.id)

    // TROVIAMO IL POST TRAMITE ID\ 
    
    // Procedimento utilizzo il FIND per trovare gli oggetti per id dichiaro variabile post che sara uguale a (posts.find) quindi va a trovare l elemento per id, poi torniamo l elemento iesimo che sarebbe post pero gli dico che deva andare a prendere per id poi gli dico che quell id deve essere === all id che ha inserito l utente

    const post =posts.find(function (post) {
        return post.id === id
    })

    // Restituiamolo sotto forma di JSON
    res.json(post);
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
    // res.send("Cancellazione del post" + req.params.id )
    
    // RECUPERIAMO ID DAL URL  E IMPOSTIAMOLO COME NUMERO INTERO
    const id = parseInt(req.params.id)

    // TROVIAMO IL POST TRAMITE ID\ 
    
    // Procedimento utilizzo il FIND per trovare gli oggetti per id dichiaro variabile post che sara uguale a (posts.find) quindi va a trovare l elemento per id, poi torniamo l elemento iesimo che sarebbe post pero gli dico che deva andare a prendere per id poi gli dico che quell id deve essere === all id che ha inserito l utente

    const post =posts.find(function (post) {
        return post.id === id
    })

    // RIMUOVIAMO UN POST 
    // POSSIAMO UTILIZZARE SPLICE
    posts.splice(posts.indexOf(post), 1);

    // Verifichiamo sul terminale
    console.log(posts);

    // Restituiamo lo status 204
    res.sendStatus(204)
    
}

// Esportiamo il file controller 
module.exports = {index,show,store,update,destroy}