import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

//IMPORT dei Router
import Routes from "./routes/routes.js";

//Prendere la variabile "app" da Express : Che rappresenta proprio il server IN ASCOLTO
const app = express();

//SCEGLIERE LA PORTA
const port = 5000;

//Alcuni MiddleWare che servono per scegliere il tipo di dati ed il modo in cui vengono passati (copy paste)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Utilizzare CORS per questioni di sicurezza
app.use(cors());

//Creare le PATH
app.get("/", (req, res) => { res.send("Il server funziona e gira sulla porta " + port) });
app.use("/Program", Routes);

app.listen(port);
