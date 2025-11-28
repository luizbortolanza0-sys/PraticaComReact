import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import api from '../service/Api.js'



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
            <p className='quote' style={{
                width: "80%",
                padding: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                borderRadius: "50px",
                marginTop: "18px",
                marginBottom:"10px",
                backgroundColor: "#4A6C8A",
                textAlign: "center"
            }}>"{quotes.slip.advice}"</p>
        </>
    );
}



function Botao(){
    const navigate = useNavigate();
    const navegacao = () =>{
        navigate('/');
    }   
    return(
        <button onClick={navegacao} style={{
            border:"0px",
            borderRadius:"10px",
            padding:"10px",
            backgroundColor: "#F48C00",
            color:"#FDE68A",
            cursor:"pointer",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
            
        }}>Retornar para pagina principal</button>
    );
}

function Extra(){
    return(<div style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "ivory",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <div style={{
            backgroundColor:"#34495E",
            overflowWrap: "break-word",
            width: "38%",
            height: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
        }}>
            <h1>Concelhos Aleatorios</h1>        
            <ContentUrl/>
            <Botao/>
        </div>
    </div>
    );
}

export default Extra;