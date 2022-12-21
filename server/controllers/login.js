const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "password": "1",
        "email": "Sincere@april.biz",
        "permission": "1"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "password": "1",
        "email": "Shanna@melissa.tv",
        "permission": "0"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "password": "1",
        "email": "Nathan@yesenia.net",
        "permission": "0"
    }
]
export const Login = (req, res) => {
    //Estrapolare le variabili passate da "Axios" (client) - che si troveranno nel BODY della request
    const { matricola, password } = req.body;

    //ELABORARE I DATI
    let result = users.find(user => user.username === matricola && user.password === password);

    //Invio della risposta con Status 200 (OK) e risultato
    res.status(200).send(result);
}