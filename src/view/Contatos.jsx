import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import './css/Contatos.css'
import Swal from 'sweetalert2'

class HelloForm extends React.Component {
    
        
    state = {
        texto: ''
    };

    handleTextChange(e) {
        this.setState({
            texto: e.target.value
        });
    }

    handleClick() {
        Swal.fire('Entraremos em contato em breve!')
    }

    render() {
        document.title="Contatos"
        return (

        <div>
            <div className="card blue">
         
          

                <div className="teste">
                    <strong>Nome</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                    <strong>Email</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                    <strong>Telefone</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                    <strong>Digite o texto:</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                    
                </div>
                <button className="botao" onClick={this.handleClick.bind(this)}>Enviar</button>
                
            </div>   

             <div class="main texto" style="margin-top: 45px;">
    <div class="card-container">
        <div class="cards">
          <div class="avatar"><img src="img/caio.jpeg"></div>
          <p><h4>CAIO PEREIRA</h4></p>
          <p><h5>Função na equipe</h5></p>
          <div class="social">
            <a href="https://github.com/caaiopereira" target="_blank"><img src="img/git.png"></a>
            <a href="https://instagram.com/kingscaio" target="_blank"><img src="img/inst.png"></a>
            <a href="https://www.linkedin.com/in/caio-pereira-oliveira/" target="_blank"><img src="img/linkedin.png" ></a>
          </div>
        </div>
   
        <div class="cards">
          <div class="avatar"><img src="img/daniel.jpg" alt="Perfil"></div>
          <p><h4>DIÓGENES DA SILVA</h4></p>
          <p><h5>Função na equipe</h5></p>
          <div class="social">
            <a href="https://github.com/diogenesferreirabr" target="_blank"><img src="img/git.png" alt="GitHub"></a>
            <a href="" target="_blank"><img src="img/inst.png" alt="Instagram"></a>
            <a href="https://www.linkedin.com/in/diogenes-ferreira-6aab9324a/" target="_blank"><img src="img/linkedin.png" alt="LinkedIn"></a>
          </div>
        </div>

        <div class="cards">
          <div class="avatar"><img src="img/leonardo.jpg" alt="Perfil"></div>
          <p><h4>LEONARDO RODRIGUES</h4></p>
          <p><h5>Função na equipe</h5></p>
          <div class="social">
            <a href="https://github.com/leomacena" target="_blank"><img src="img/git.png" alt="GitHub"></a>
            <a href="https://instagram.com/leomacena23" target="_blank"><img src="img/inst.png" alt="Instagram"></a>
            <a href="https://www.linkedin.com/in/leonardomacena/" target="_blank"><img src="img/linkedin.png" alt="LinkedIn"></a>
          </div>
        </div>

        <div class="cards">
          <div class="avatar"><img src="img/luiz.jpg" alt="Perfil"></div>
          <p><h4>LUÍS HENRIQUE</h4></p>
          <p><h5>Função na equipe</h5></p>
          <div class="social">
            <a href="https://github.com/Luis-Henrique-Lima" target="_blank"><img src="img/git.png" alt="GitHub"></a>
            <a href="" target="_blank"><img src="img/inst.png" alt="Instagram"></a>
            <a href="https://www.linkedin.com/in/lu%C3%ADs-henrique-santos/" target="_blank"><img src="img/linkedin.png" alt="LinkedIn"></a>
          </div>
        </div>

        <div class="cards">
          <div class="avatar"><img src="img/pedro.jpg" alt="Perfil"></div>
          <p><h4>PEDRO DE SOUZA</h4></p>
          <p><h5>Função na equipe</h5></p>
          <div class="social">
            <a href="https://github.com/themonsteer" target="_blank"><img src="img/git.png" alt="GitHub"></a>
            <a href="" target="_blank"><img src="img/inst.png" alt="Instagram"></a>
            <a href="https://www.linkedin.com/in/pedro-souza-a382b3182" target="_blank"><img src="img/linkedin.png" alt="LinkedIn"></a>
          </div>
        </div>       
    </div>
  </div>
          
          </div>
           
        )
    }
}

export default HelloForm;
