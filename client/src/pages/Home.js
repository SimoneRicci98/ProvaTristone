import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, List, ListItem } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [idea, setIdea] = useState({});
    const [idee, setIdee] = useState([]);
    const URL = 'http://localhost:5000/Program/Home';
    const user = JSON.parse(sessionStorage.getItem("user"));

    const getIdeas = () => {
        const onSelect = (arrayIdee) => {
            if (arrayIdee) {
                setIdee(arrayIdee)
            }
        }
        axios.post(URL, { data: user, action: "select" })
            .then(res => {
                if (onSelect !== undefined)
                    onSelect(res.data)
            })
            .catch((error) => {
                if (error.request) {
                    console.log('Request Error : ', error.message);
                }
                else {
                    console.log('Error : ', error.message);
                }
            });
    }


    const saveIdea = () => {
        const onInsert = (arrayIdeeNewLenght) => {
            if (arrayIdeeNewLenght)
                alert("idea inserita")
        }
        if (idea) {
            console.log(idea)
            axios.post(URL, { data: idea, action: "insert" })
                .then(res => {
                    if (onInsert !== undefined)
                        onInsert(res.data)
                })
                .catch((error) => {
                    if (error.request) {
                        console.log('Request Error : ', error.message);
                    }
                    else {
                        console.log('Error : ', error.message);
                    }
                });
            setIdea({ "username": user.username, "idea": "", "stato": "0" })
            getIdeas()
        }
    }

    useEffect(() => {
        getIdeas();
    }, [])

    return (
        <Box sx={{ margin: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <h1>Benvenuto/a {user.username}</h1>
            {
                user.permission < 1 ? //solo gli utenti normali possono inserire le idee, gli amministratori no
                    <Box>
                        <TextField sx={{ width: '100%' }} id="filled-multiline-static" label="Scrivi qui la tua idea" multiline rows={10} value={idea.idea} onChange={(e) => setIdea({ "username": user.username, "idea": e.target.value, "stato": "0" })} />
                        <Button onClick={() => { saveIdea() }}>Inserisci</Button>
                    </Box>
                    :
                    ''
            }

            <List sx={{ width: '100%' }}>
                {
                    idee.map((idea, i) => {
                        return <IdeaComponent idea={idea} key={i} numero={i} />
                    })
                }
            </List>
        </Box>
    );
}

const IdeaComponent = (props) => {
    const navigate = useNavigate();
    const ChangePage = (path, data) => {
        navigate(path, data);
    }
    const { idea, numero } = props
    const color = {
        '0': '#f1c800',
        '1': '#80972E',
        '2': '#e70e0e',
        '3': '#2986cc',
    }
    return <>
        <ListItem style={{ backgroundColor: color[idea.stato], cursor: "pointer" }} onClick={() => { ChangePage("/Comments", { state: { idea } }) }}>
            <Grid container spacing={1} >
                <Grid item xs={12} sm={2}>{numero + 1}</Grid>
                <Grid item xs={12} sm={2}>{idea.username}</Grid>
                <Grid item xs={12} sm={8}>{idea.idea}</Grid>
            </Grid>
        </ListItem>
    </>
}


export default Home;