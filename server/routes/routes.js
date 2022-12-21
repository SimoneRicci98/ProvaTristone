import express from "express";
import { Login } from "../controllers/login.js";
import { Idee } from "../controllers/home.js";
import { Commenti } from "../controllers/commenti.js";

//Creare la variabile "router" importata da Express
const router = express.Router();

//Default PATH per le richieste GET
router.get("/", (req, res) => {
    res.send("Nessuna Pagina");
});

//Creare le path per le richieste POST ed associargli un "metodo" risolutivo.
router.post("/Login", Login);
router.post("/Home", Idee);
router.post("/Commenti", Commenti);


export default router;