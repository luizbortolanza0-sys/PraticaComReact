import Instagram from '../assets/intagram.png';
import LinkedIn from '../assets/linkedin.png';
import Whatsapp from '../assets/whatsapp.png';
import DevTalks from '../assets/devtalks.jpg';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import {Container, Box }from "@mui/material"
function formatDate(){
  const time = new Date();
  if(time.getMinutes()<10){
    return time.getHours()+ ":" + 0+time.getMinutes() +"-" + time.getDate() + "/"+ (time.getMonth()+1) + "/" + time.getFullYear();    
  }
  return time.getHours()+ ":" + time.getMinutes() +"-" + time.getDate() + "/"+ (time.getMonth()+1) + "/" + time.getFullYear();
}
function DateNow(){
  const [data, setData] = useState(null);
  useEffect(()=>{
    setData(formatDate());
  },[]);
    
  return (
    <p style={{
      fontFamily:" 'Times New Roman', Times, serif",
      alignSelf:"flex-end"
    }}>{data}</p>
  );

}

function Content({ titulo, conteudo, src }) { 
  
  return (
    <div style={{
      padding: "20px",
      display: "flex",
      flexDirection:"row",
      alignItems: "center",
      paddingTop: "10px",
      paddingBottom: "20px",
      paddingLeft:"30px"
    }}>
      <div>
        <h3 className='subtitulos'>{titulo}</h3>
        <p style={{
          textShadow: "1px 1px 1px rgba(0,0,0,0.3)"
        }}>{conteudo}</p>
      </div>
      <img src={src} alt="Foto" style={{
        height: "110px",
        width: "110px",
        paddingLeft: "10px"
      }}/>
    </div>
  );
}
function App() {
  

  return(
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: "#E5E7EB",
      height: "100%",
      width: "100%",
    }} maxWidth = "xl">
      <header style={{
        backgroundColor: "#024552",
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #4A2E1F",
        paddingBottom: "20px",
        paddingTop: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        position: "sticky", 
        top:"0"
      }}>
        <h1 style={{
          paddingLeft: "40px",
          textShadow: "1px 1px 1px rgba(0,0,0,0.3)"
        }}>Luiz Felipe Cola Bortolanza</h1>
        <Box >
          <a href="https://github.com/luizbortolanza0-sys" target='blank'
          style={{
            color: "#d3c1b4",
            textDecoration: "none",
            transition: "0.2s",
            paddingRight: "40px"
          }}>
            <img src="https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg" alt="Foto" 
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "50%",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
            }}/>
          </a>
          <DateNow/>
        </Box>
      </header>

      <main className='conteudo' style={{
        width: "60%",
        height: "auto",
        backgroundColor: "#173D33",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
      }}>
        <h2 style={{
          padding:"20px 0px 20px 35px",
          fontSize: "30px"
        }}>Experiencias</h2>
        <div>
          <Content
          titulo = "React, experiencia com front-end de web"
          conteudo = "Progrmação em front end com tecnologias atuais de progrmação web, junto dos conteudos de JS e CSS"
          src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
          />
          <Content
          titulo = "Java, conteudo de orientação a objeto"
          conteudo = "Aprendendo os pilares de orientação a objeto em java, alem de aprender sobre praticas de arquitetura de software como ddd, alem de dominar a sintaxe"
          src ="https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Java_programming_language_logo.svg/234px-Java_programming_language_logo.svg.png?20190828223431"
          />
          <Content
          titulo = "C, a linguagem para aprender logica de programação"
          conteudo = "Desenvolvimento de atividades com C para aprender um pouco sobre logica de programação, sintaxe de fluxo construção de struct com estudo de ponteiros e alocação dinamica"
          src ="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
          />
          <Content
          titulo = "Dev-Talks"
          conteudo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum similique debitis odit tempora dolore iste dolor voluptatum molestias placeat. Iusto deleniti cum molestias, dolor sunt alias veritatis aliquid blanditiis!"
          src ={DevTalks}
          />
          {/*Apenas conteudo complementar para estruturação da pagina*/}
          <Content
          titulo = "C#, estudos a parte"
          conteudo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum similique debitis odit tempora dolore iste dolor voluptatum molestias placeat. Iusto deleniti cum molestias, dolor sunt alias veritatis aliquid blanditiis!"
          src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/256px-Logo_C_sharp.svg.png?20221121173824"
          />
          <Content
          titulo = "SQL, banco de dados e suas tecnologias"
          conteudo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum similique debitis odit tempora dolore iste dolor voluptatum molestias placeat. Iusto deleniti cum molestias, dolor sunt alias veritatis aliquid blanditiis!"
          src ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png"
          />
        </div>
        
    
      </main>

      <footer style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#25150e",
        paddingBottom: "20px",
        paddingTop: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
      }}>
        <p className='info'>Produzido por Luiz Bortolanza</p>

        {/*Criação de paginação com testes de router com react*/}
        <a href='/quote' className='frase' >Frase</a>
        
        <div className='socialmedia'>
          <a href="https://www.instagram.com/luizbortolanza7?igsh=MWJweDE4OWt6cWIwag%3D%3D&utm_source=qr" target='blank' style={{
            color: "#d3c1b4",
            textDecoration: "none",
            transition: "0.2s",
            
          }}>
            <img src={Instagram} alt="Instagram" style={{
              height: "50px",
              width: "50px",
              borderRadius: "15px"
            }}/>
          </a>
          <a href="https://br.linkedin.com/in/luiz-felipe-cola-bortolanza-846620269" target='blank'style={{
            color: "#d3c1b4",
            textDecoration: "none",
            transition: "0.2s",
            
          }}>
            <img src={LinkedIn} alt="LinkedIn" style={{
              height: "50px",
              width: "50px",
              borderRadius: "15px"
            }}/>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5549999860752&text&type=phone_number" target='blank'>
            <img src={Whatsapp} alt="Whatsapp" style={{
              height: "50px",
              width: "50px",
              borderRadius: "15px"
            }}/>
          </a>
        </div>
      </footer>
    </Container>
  ); 
}
export default App;