import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import './css/Contatos.css'
import Swal from 'sweetalert2'
import InputMask from 'react-input-mask';
import Form from 'react-bootstrap/Form';

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


            <div className="card blue">



                <div className="teste">
                    <strong>Nome</strong> <Form.Control
                        as={InputMask}

                        placeholder="Digite seu nome"
                    />
                    <strong>Email</strong> <Form.Control
                        as={InputMask}

                        placeholder="Digite seu email"
                    />

                    <strong>Telefone</strong>
                    <Form.Control
                        as={InputMask}
                        mask="(99)99999-9999"
                        placeholder="Digite seu Telefone" />
                    <strong>Digite o texto:</strong> <Form.Control
                        as={InputMask}

                        placeholder="Digite o texto"
                    />



                </div>
                <button className="botao" onClick={this.handleClick.bind(this)}>Enviar</button>

            </div>



        )


    }
}

export default HelloForm;
