Per creare un server EXPRESS:

Entrare nella cartella desiderata per la creazione del server.
Aprire il CMD ed eseguire:

    npm init (dopodichè seguire le istruzioni della console)

    npm install express
    npm install nodemon
    npm install cors

Una volta eseguiti i comandi andare nel file : package.json

e modificare : 

    "scripts": {
        "start": "nodemon start"
        },

in modo che quando si effettua "npm start" si utilizzerà nodemon (serve a fare in modo che il server vada in HOT RELOAD cosi da non doverlo riavviare ad ogni modifica)

e poi aggiungere sopra a "scripts" : 

    "type": "module",

in modo che si possano utilizzare gli IMPORT ES6.


Fatto questo :

    creare il file index.js
    creare la directory routes -> Destinata alle semplici ROUTE che importeranno le varie "azioni"
    creare la directory controllers -> Destinata ad i file che conterranno i metodi "azione"

Se volete copiate come "placeholder" i 3 file presenti in questo progetto.

Effettuare 

    npm start 
q
e controllare che al fondo ci sia una scritta verde.

In questo caso il server sarà in ASCOLTO sulla porta 5000.

Per testarlo potete aprire il browser e digitare : 

    http://localhost:5000

Nel caso uscisse la scritta : "Il server funziona e gira sulla porta 5000" 
il server è funzionante ed in ascolto.

Potete anche testare se viene trovata ed utilizzata la route TEST in questo caso con :

    http://localhost:5000/Test

Che dovrebbe rispondere : Nessuna Pagina





CLIENT : 
    npm install axios

poi nel file

    import axios from "axios"


e nel metodo di chiamata : 

    const URL = http://localhost:5000/Test;
    const obj = "Testo da stampare";
    const onDone = (data) => 
    {
        console.log(data);
    }
    
    axios.post(URL, obj)
        .then(res => {
            if(onDone !== undefined)
                onDone(res.data)
        })
        .catch((error) => {
            if (error.request) 
            {
                console.log("Request Error : ", error.message);
            } 
            else
            {
                console.log('Error : ', error.message);
            }
        });

FINEEEEEE
