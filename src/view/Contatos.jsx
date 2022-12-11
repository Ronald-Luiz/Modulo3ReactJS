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
        return (
            <div className="teste">
                Nome <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                Email <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                Telefone <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                Digite o texto: <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                <button className="botao" onClick={this.handleClick.bind(this)}>Enviar</button>
            </div>
        )
    }
}

export default HelloForm;
