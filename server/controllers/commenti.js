let commenti = [
    {
        "username": "Bret",
        "idea": "idea1",
        "commento": "idea furba"
    },
    {
        "username": "Bret",
        "idea": "idea1",
        "commento": "idea furba1"
    },
    {
        "username": "Bret",
        "idea": "idea1",
        "commento": "idea furba2"
    }
]

export const Commenti = (req, res) => {

    //Estrapolare le variabili passate da "Axios" (client) - che si troveranno nel BODY della request
    const { azione, commento, statoIdea, idea } = req.body;
    let result;
    switch (azione) {
        case "select":
            result = commenti.filter(commento => commento["username"] === idea["username"] && commento["idea"] === idea["idea"]);
            break;
        case "insert":
            if (statoIdea !== idea.stato) {
                //modificare stato idea
            }
            else {
                let nuovoCommento = {
                    "username": idea.username,
                    "idea": idea.idea,
                    "commento": commento
                }
                commenti = [...commenti, nuovoCommento]
            }
            result = commenti.filter(commento => commento["username"] === idea["username"]);

            break;
        default:
            break;
    }

    //ELABORARE I DATI

    //Invio della risposta con Status 200 (OK) e risultato
    res.status(200).send(result);
}