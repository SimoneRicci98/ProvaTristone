const idee = [
    {
        "username": "Bret",
        "idea": "idea1",
        "stato": "0"
    },
    {
        "username": "Bret",
        "idea": "idea2",
        "stato": "0"
    },
    {
        "username": "Bret",
        "idea": "idea3",
        "stato": "1"
    },
    {
        "username": "Bret",
        "idea": "idea qualcosa1",
        "stato": "2"
    },
    {
        "username": "Bret",
        "idea": "idea qualcosa2",
        "stato": "3"
    },
    {
        "username": "Leopoldo_Corkery",
        "idea": "idea qualcosa3",
        "stato": "1"
    },
    {
        "username": "Karianne",
        "idea": "idea qualcosa4",
        "stato": "0"
    },
    {
        "username": "Karianne",
        "idea": "2",
        "stato": "2"
    },
    {
        "username": "Karianne",
        "idea": "idea qualcosa5",
        "stato": "2"
    },
    {
        "username": "Karianne",
        "idea": "idea qualcosa6",
        "stato": "1"
    }
]

export const Idee = (req, res) => {

    //Estrapolare le variabili passate da "Axios" (client) - che si troveranno nel BODY della request
    const { data, action } = req.body;
    let result;
    switch (action) {
        case "select":
            if (data.permission < 1)
                result = idee.filter(idea => idea["username"] === data["username"]);
            else
                result = idee;
            break
        case "insert":
            result = idee.push(data).toString();
            break
        default:
            break
    }


    //ELABORARE I DATI

    //Invio della risposta con Status 200 (OK) e risultato
    res.status(200).send(result);
}