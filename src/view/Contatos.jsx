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


            <div className="card blue">
         
          

                <div className="teste">
                    <strong>Nome</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                    <strong>Email</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                    <strong>Telefone</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                    <strong>Digite o texto:</strong> <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                    
                </div>
                <button className="botao" onClick={this.handleClick.bind(this)}>Enviar</button>
                
            </div>          
          
          
           
        )
    }
}

export default HelloForm;