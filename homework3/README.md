https://young-sands-28296.herokuapp.com/

### What are the (active) URLs for your data service?

* https://young-sands-28296.herokuapp.com/
* https://young-sands-28296.herokuapp.com/players
* https://young-sands-28296.herokuapp.com/games
* https://young-sands-28296.herokuapp.com/players/:id

### Which of these endpoints implement actions that are idempotent? nullipotent?

* router.get("/", readHelloMessage); - Idempotent and Nullipotent
* router.get("/players", readPlayers); - Idempotent and Nullipotent
* router.get("/games", readGames); - Idempotent and Nullipotent
* router.get("/players/:id", readPlayer); - Idempotent and Nullipotent
* router.put("/players/:id", updatePlayer); - Idempotent
* router.post('/players', createPlayer); - Neither
* router.delete('/players/:id', deletePlayer); - Idempotent

### Is the service RESTful? If not, why not? If so, what key features make it RESTful.

Yes, because it features a client and server which provide the basic REST API functions, it's stateless, and let's you get data in JSON files through HTTP.

### Is there any evidence in your implementation of an impedance mismatch?

No, everything that is an integer comes through as an integer (since it isn't surrounded by quotes), and everything that should be a string is a string (since they do have quotes).
