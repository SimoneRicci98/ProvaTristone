import { TextField, Box, Grid, Select, MenuItem, Button, List, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Comments = () => {
    const { state } = useLocation();
    const { idea } = state;
    const [statoIdea, setStatoIdea] = useState(idea.stato);
    const [commento, setCommento] = useState('');
    const [listaCommenti, setListaCommenti] = useState([]);
    const user = JSON.parse(sessionStorage.getItem("user"));

    const URL = 'http://localhost:5000/Program/Commenti';

    const onDone = (listaCommenti) => {
        if (listaCommenti) setListaCommenti(listaCommenti)
        //console.log(listaCommenti)
    }
    const insertAndUpdate = () => {
        axios.post(URL, { "azione": "insert", "commento": commento, "statoIdea": statoIdea, "idea": idea })
            .then(res => {
                if (onDone !== undefined)
                    onDone(res.data)
            })
            .catch((error) => {
                error.request ?
                    console.log('Request Error : ', error.message)
                    :
                    console.log('Error : ', error.message);
            });
    }


    const selectComments = () => {
        axios.post(URL, { "azione": "select", "commento": commento, "statoIdea": statoIdea, "idea": idea })
            .then(res => {
                if (onDone !== undefined)
                    onDone(res.data)
            })
            .catch((error) => {
                error.request ?
                    console.log('Request Error : ', error.message)
                    :
                    console.log('Error : ', error.message)
            });
    }

    useEffect(() => { selectComments() }, [])
    return <>
        <Box sx={{ margin: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <TextField fullWidth disabled defaultValue={idea.idea}></TextField>
            <Grid container spacing={8} >
                <Grid item xs={12} sm={6}>
                    Aggiungi commento
                    <TextField fullWidth placeholder={"Commento"} onChange={(e) => { setCommento(e.target.value) }}></TextField>
                    <List>
                        {listaCommenti.map((commento, index) => {
                            return (
                                <ListItem key={index}>
                                    <Grid container spacing={1} >
                                        <Grid item xs={12} sm={2}>{index + 1}</Grid>
                                        <Grid item xs={12} sm={10}>{commento.commento}</Grid>
                                    </Grid>
                                </ListItem>)
                        })}
                    </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                    Modifica stato <br></br>
                    <Select disabled={user.permission < 1} value={statoIdea} label="Stato" onChange={(e) => setStatoIdea(e.target.value)}>
                        <MenuItem value={0}>Inserita</MenuItem>
                        <MenuItem value={1}>In revisione</MenuItem>
                        <MenuItem value={2}>Accetata</MenuItem>
                        <MenuItem value={3}>Rifiutata</MenuItem>
                    </Select>


                    <Button onClick={() => { insertAndUpdate() }}>Salva</Button>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default Comments