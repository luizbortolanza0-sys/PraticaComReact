import { useEffect, useState } from 'react';
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
                marginTop: "25px",
                backgroundColor: "#4A6C8A",
                textAlign: "center"
            }}>{quotes.slip.advice}</p>
        </>
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
        </div>
    </div>
    );
}

export default Extra;