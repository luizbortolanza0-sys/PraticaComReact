import Instagram from '../assets/intagram.png';
import LinkedIn from '../assets/linkedin.png';
import Whatsapp from '../assets/whatsapp.png';
import DevTalks from '../assets/devtalks.jpg';
import { useEffect, useState } from 'react';
import {Container, Box, Button }from "@mui/material";
import {theme} from "../styles/theme.jsx"

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
      alignSelf:"center"
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
      backgroundColor: theme.bg.first,
      height: "100%",
      width: "100%",
    }} maxWidth = "xl">
      <header style={{
        backgroundColor: theme.bg.header.color,
        width: theme.bg.widthRight,
        height: "30%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: theme.bg.header.underline,
        paddingBottom: "20px",
        paddingTop: "20px",
        boxShadow: theme.sdw.bxSdw,
        position: "sticky", 
        top:"0"
      }}>
        <h1 style={{
          paddingLeft: "40px",
          textShadow: theme.sdw.txSdw
        }}>Luiz Felipe Cola Bortolanza</h1>
        <Box sx={{
          display:"flex",
          flexDirection:'column',
          paddingRight: "60px"
        }} >
          <Button href="https://github.com/luizbortolanza0-sys" target='blank' sx={{
            color: "#d3c1b4",
            textDecoration: "none",
            transition: "0.2s",
          }}>
            <img src="https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg" alt="Foto" 
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "50%",
              boxShadow: theme.sdw.bxSdw
            }}/>
          </Button>
          <DateNow/>
        </Box>
      </header>

      <Container sx={{
        width: "60%",
        height: "auto",
        backgroundColor: "#173D33",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: theme.sdw.bxSdw
      }}>
        <h2 style={{
          padding:"20px 0px 20px 35px",
          fontSize: "30px"
        }}>Experiencias</h2>
        <Container>
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
        </Container>
      </Container>

      <footer style={{
        width: theme.bg.widthRight,
        height: "auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: theme.bg.footer.bgColor,
        paddingBottom: "20px",
        paddingTop: "20px",
        boxShadow: theme.sdw.bxSdw
      }}>
        <p className='info'>Produzido por Luiz Bortolanza</p>

        {/*Criação de paginação com testes de router com react*/}
        <Button variant='text' href='/quote' sx={{
          color: '#d3c1b4',
          textDecoration: 'none',
          transition: '0.2s',
          "&:hover":{
            color: 'white',
            textDecoration: 'underline'
          }
        }} >Frase</Button>
                
        <Box>
          <Button target='blank' href='https://www.instagram.com/luizbortolanza7?igsh=MWJweDE4OWt6cWIwag%3D%3D&utm_source=qr'>
            <img src={Instagram} alt="Instagram" style={theme.bg.footer.iconSize}/>
          </Button>
          <Button target='blank' href='https://br.linkedin.com/in/luiz-felipe-cola-bortolanza-846620269'>
            <img src={LinkedIn} alt="LinkedIn" style={theme.bg.footer.iconSize}/>
          </Button>
          <Button target='blank' href='https://wa.me/554999860752'>
            <img src={Whatsapp} alt="Whatsapp" style={theme.bg.footer.iconSize}/>
          </Button>
        </Box>
      </footer>
    </Container>
  ); 
}
export default App;