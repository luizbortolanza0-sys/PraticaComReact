import { useEffect, useState } from 'react';
import './Extra.css';
const Url = "https://api.adviceslip.com/advice";
import axios from 'axios';



function ContentUrl(){
    const [quotes,setQuotes] = useState(null);

    useEffect(()=>{
        const conteudo = async()=>{
            const response = await axios.get(Url);
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

            <p className='quote'>{quotes.slip.advice}</p>
        </>
    );
}

function Extra(){
    return(<div className='background'>
        <div className="bloco">
            <h1 className='concelhos'>Concelhos Aleatorios</h1>        
            <ContentUrl/>
        </div>
    </div>
    );
}

export default Extra;