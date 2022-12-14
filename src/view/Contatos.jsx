import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import './css/Contatos.css'
import Swal from 'sweetalert2'
import InputMask from 'react-input-mask';
import Form from 'react-bootstrap/Form';
import avatar from '../images/avatar.png'
import ronald from '../images/ronald.jpeg'
import pablo from '../images/pablo.jpeg'
import val from '../images/valdeilson.jpeg'
import leo from '../images/leonardo.jpeg'
import git from '../images/git.png'
import insta from '../images/insta.png'
import linkedin from '../images/linkedin.png'

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
            <div className='MainContact'>

                <div className="ajustes">
                    <div className="cardForm">

                        <h2>PARA MAIS INFORMAÇÕES, ENTRE EM CONTATO</h2>

                        <div className="teste">
                            
                            <strong>Nome</strong> <Form.Control className='form'
                                as={InputMask}

                                placeholder="Digite seu nome"
                            />
                            <strong>Email</strong> <Form.Control className='form'
                                as={InputMask}

                                placeholder="Digite seu email"
                            />

                            <strong>Telefone</strong>
                            <Form.Control className='form'
                                as={InputMask}
                                mask="(99)99999-9999"
                                placeholder="Digite seu Telefone" />
                            <strong>Digite o texto:</strong> <Form.Control className='form'
                                as={InputMask}

                                placeholder="Digite o texto" />



                        </div>
                        <button className="botao" onClick={this.handleClick.bind(this)}>Enviar</button>

                    </div>
                <h1>CONHEÇA NOSSA EQUIPE</h1>
                </div>


                <div className='contact'>

                    <div className='card'>
                        <div class="avatar"><img src={ronald} alt='Perfil' /></div>
                        <p><h4><b>RONALD LUIZ</b></h4></p>
                        <p><h6>CO-FACILITADOR</h6></p>
                        <div class="social">
                            <a href="#" target="_blank"><img src={git} alt='Perfil' /></a>
                            <a href="#"><img src={insta} alt='Perfil' /></a>
                            <a href="#" target="_blank"><img src={linkedin} alt='Perfil' /></a>
                        </div>
                    </div>


                    <div className='card'>
                        <div class="avatar"><img src={pablo} alt='Perfil' /></div>
                        <p><h4><b>PABLO MICELI</b></h4></p>
                        <p><h6>GESTOR DE CONHECIMENTO</h6></p>
                        <div class="social">
                            <a href="#" target="_blank"><img src={git} alt='Perfil' /></a>
                            <a href="#" ><img src={insta} alt='Perfil' /></a>
                            <a href="#" target="_blank"><img src={linkedin} alt='Perfil' /></a>
                        </div>
                    </div>


                    <div className='card'>
                        <div class="avatar"><img src={val} alt='Perfil' /></div>
                        <p><h4><b>VALDEILSON</b></h4></p>
                        <p><h6>GESTOR DE GENTE E ENGAJAMENTO</h6></p>
                        <div class="social">
                            <a href="#" target="_blank"><img src={git} alt='Perfil' /></a>
                            <a href="#"><img src={insta} alt='Perfil' /></a>
                            <a href="#" target="_blank"><img src={linkedin} alt='Perfil' /></a>
                        </div>
                    </div>

                    <div className='card'>
                        <div class="avatar"><img src={leo} alt='Perfil' /></div>
                        <p><h4><b>LEONARDO MACENA</b></h4></p>
                        <p><h6>COLABORADOR I</h6></p>
                        <div class="social">
                            <a href="#" target="_blank"><img src={git} alt='Perfil' /></a>
                            <a href="#"><img src={insta} alt='Perfil' /></a>
                            <a href="#" target="_blank"><img src={linkedin} alt='Perfil' /></a>
                        </div>
                    </div>

                    <div className='card'>
                        <div class="avatar"><img src={avatar} alt='Perfil' /></div>
                        <p><h4><b>VICTOR ROBSON</b></h4></p>
                        <p><h6>COLABORADOR II</h6></p>
                        <div class="social">
                            <a href="#" target="_blank"><img src={git} alt='Perfil' /></a>
                            <a href="#"><img src={insta} alt='Perfil' /></a>
                            <a href="#" target="_blank"><img src={linkedin} alt='Perfil' /></a>
                        </div>
                    </div>

                </div>

            </div>
        )


    }
}

export default HelloForm;
