import Instagram from './assets/intagram.png'
import LinkedIn from './assets/linkedin.png'
import Whatsapp from './assets/whatsapp.png'
import './App.css'

function formatDate(){
  const time = new Date();
  return time.getDate() + "/"+ (time.getMonth()+1) + "/" + time.getFullYear();
}


function Content({ titulo, conteudo, src }) { 
  
  return (
    <div className='content'>
      <div>
        <h3 className='subtitulos'>{titulo}</h3>
        <p className='escrita'>{conteudo}</p>
      </div>
      <img src={src} alt="Foto" />
    </div>
  );
}
function App() {
  

  return(
    <div className = 'container'>
      <header className='cabecalio'>
        <h1 className='titulo'>Luiz Felipe Cola Bortolanza</h1>
        <a href="https://github.com/luizbortolanza0-sys" target='blank'>
          <img src="https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg" alt="Foto" />
        </a>
      </header>

      <main className='conteudo'>
        <h2 className='titulo2'>Experiencias</h2>
        <div>
          <Content
          titulo = "React, experiencia com front-end de web"
          conteudo = "Progrmação em front end com tecnologias atuais de progrmação web, junto dos conteudos de JS e CSS"
          src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7ECW4xHgJyeIQexegqGhxgHGknkobmD0xA&s"
          />
          <Content
          titulo = "Java, conteudo de orientação a objeto"
          conteudo = "Aprendendo os pilares de orientação a objeto em java, alem de aprender sobre praticas de arquitetura de software como ddd, alem de dominar a sintaxe"
          src ="https://banner2.cleanpng.com/20180420/wrq/aveffx3dw.webp"
          />
          <Content
          titulo = "C, a linguagem para aprender logica de programação"
          conteudo = "Desenvolvimento de atividades com C para aprender um pouco sobre logica de programação, sintaxe de fluxo construção de struct com estudo de ponteiros e alocação dinamica"
          src =""
          />
          <Content
          titulo = "Dev-Talks"
          conteudo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum similique debitis odit tempora dolore iste dolor voluptatum molestias placeat. Iusto deleniti cum molestias, dolor sunt alias veritatis aliquid blanditiis!"
          src =""
          />
          {/*Apenas conteudo complementar para estruturação da pagina*/}
          <Content
          titulo = "C#, estudos a parte"
          conteudo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum similique debitis odit tempora dolore iste dolor voluptatum molestias placeat. Iusto deleniti cum molestias, dolor sunt alias veritatis aliquid blanditiis!"
          src =""
          />
          <Content
          titulo = "SQL, banco de dados e suas tecnologias"
          conteudo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum similique debitis odit tempora dolore iste dolor voluptatum molestias placeat. Iusto deleniti cum molestias, dolor sunt alias veritatis aliquid blanditiis!"
          src =""
          />
        </div>
        
    
      </main>

      <footer className='rodape'>
        <p className='info'>Produzido por Luiz Bortolanza</p>

        {/*Criação de paginação com testes de router com react*/}
        <a href='/quote' className='quote'>Frase</a>
        
        <div className='socialmedia'>
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="">
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
        </div>
      </footer>
    </div>
  ); 
}
export default App
