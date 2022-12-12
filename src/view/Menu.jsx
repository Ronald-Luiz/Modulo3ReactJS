import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import './css/Contatos.css';
import Swal from 'sweetalert2';
import avatar from "../images/avatar.png"
import insta from "../images/insta.png"
import git from "../images/git.png"
import linkedin from "../images/linkedin.png"

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
        document.title = "Contatos"
        return (

            <>
                <div className="card blue">



                    <div className="teste">
                        <strong>Nome</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                        <strong>Email</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                        <strong>Telefone</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                        <strong>Digite o texto:</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                    </div>
                    
                    <button className="botao" onClick={this.handleClick.bind(this)}>Enviar</button>

                </div>

                <div class="main texto" style="margin-top: 45px;"></div>

                    <div class="card-container">
                        <div class="cards">
                            <div class="avatar"><img src={avatar} alt="Perfil" /></div>
                                <p><h4>LEONARDO MACENA</h4></p>
                                <p><h5>Função na equipe</h5></p>
                                <div class="social">
                                    <a href="#" target="_blank"><img src={git} alt="GitHub" /> </a>
                                    <a href="#" target="_blank"><img src={insta} alt="Instagram" /></a>
                                    <a href="#" target="_blank"><img src={linkedin}alt="LinkedIn" /></a>
                                </div>
                        </div>

                        <div class="cards">
                            <div class="avatar"><img src={avatar} alt="Perfil" /></div>
                                    <p><h4>PABLO MICELI</h4></p>
                                    <p><h5>Função na equipe</h5></p>
                                    <div class="social">
                                        <a href="#" target="_blank"><img src={git} alt="GitHub" /></a>
                                        <a href="#" target="_blank"><img src={insta} alt="Instagram" /></a>
                                        <a href="#" target="_blank"><img src={linkedin}alt="LinkedIn" /></a>
                                    </div>
                        </div>

                        <div class="cards">
                            <div class="avatar"><img src={avatar} alt="Perfil" /></div>
                                    <p><h4>RONALD LUIZ</h4></p>
                                    <p><h5>Função na equipe</h5></p>
                                    <div class="social">
                                        <a href="#" target="_blank"><img src={git} alt="GitHub" /></a>
                                        <a href="#" target="_blank"><img src={insta} alt="Instagram" /></a>
                                        <a href="#" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
                                    </div>
                        </div>

                        <div class="cards">
                            <div class="avatar"><img src={avatar} alt="Perfil" /></div>
                                    <p><h4>VALDEILSON</h4></p>
                                    <p><h5>Função na equipe</h5></p>
                                    <div class="social">
                                        <a href="#" target="_blank"><img src={git} alt="GitHub" /></a>
                                        <a href="#" target="_blank"><img src={insta} alt="Instagram" /></a>
                                        <a href="#" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
                                    </div>
                        </div>

                        <div class="cards">
                            <div class="avatar"><img src={avatar} alt="Perfil" /></div>
                                    <p><h4>VICTOR ROBSON</h4></p>
                                    <p><h5>Função na equipe</h5></p>
                                    <div class="social">
                                        <a href="#" target="_blank"><img src={git} alt="GitHub" /></a>
                                        <a href="#" target="_blank"><img src={insta} alt="Instagram" /></a>
                                        <a href="#" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
                                    </div>
                        </div>       
                    </div>
            

        </>
        

        )
    }
}

export default HelloForm;
