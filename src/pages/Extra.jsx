import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import api from '../service/Api.js'
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import {theme} from "../styles/theme.jsx"



function ContentUrl(){
    const [quotes,setQuotes] = useState(null);

    useEffect(()=>{
        const conteudo = async()=>{
            const response = await api.get('/advice');
            const quote = await response.data;
            setQuotes(quote);
        }
        conteudo();
    }, [])
        
    if (!quotes) {
        return <p>Carregando...</p>;
    }
    return (
        <>
            <p style={{
                width: "80%",
                padding: "15px",
                boxShadow: theme.sdw.bxSdw,
                borderRadius: "50px",
                marginTop: "18px",
                marginBottom:"10px",
                backgroundColor: theme.bgextra.quote,
                textAlign: "center"
            }}>"{quotes.slip.advice}"</p>
        </>
    );
}




function Extra(){
    const navigate = useNavigate();
    const navegacao = () =>{
        navigate('/');
    }


    return(
    <Container sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: theme.bgextra.back,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }} maxWidth="xl">
        <Box sx={{
            backgroundColor:theme.bgextra.box,
            overflowWrap: "break-word",
            width: "38%",
            height: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            boxShadow: theme.sdw.bxSdw
        }}>
            <h1>Concelhos Aleatorios</h1>        
            <ContentUrl/>
            <Button onClick={navegacao} size="medium" sx={{
                border:"0px",
                borderRadius:"10px",
                padding:"10px",
                backgroundColor: theme.bgextra.button,
                color:theme.bgextra.font,
                cursor:"pointer",
                boxShadow: theme.sdw.bxSdw,
                "&:hover":{
                    backgroundColor: theme.bgextra.buttonHover
                }
            }}>Volar para Pagina</Button>
        </Box>
    </Container>
    );
}

export default Extra;