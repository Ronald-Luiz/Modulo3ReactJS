import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./css/create.css"

export default function Create() {
  document.title="Inserir"
  let history = useNavigate();
  const [nomes, setNomes] = useState('');
  const [valor, setValor] = useState('');
  const [valorParcelado, setValorParcelado] = useState('');
  const [posicao, setPosicao] = useState('');
  const [marca, setMarca] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [imagem, setImagem] = useState('');
 

  const sendDataToAPI = () => {
    axios.post(`https://js0n-server.vercel.app/GPU`, {
      nomes,
      valor,
      valorParcelado,
      posicao,
      marca,
      subtitulo,
      imagem
    }).then(() => {
      history.push('/read')
    })
  }
  return (
    <div className='Main'>
      <div className='nada'></div>
      <Form className='form'>
        <Form.Field className='inputs'>
          <label><b>TÍTULO</b></label>
          <input name="titulo" 
          onChange={(e) => setNomes(e.target.value)} 
          placeholder='Modelo' />
        </Form.Field>
        <Form.Field className='inputs'>
          <label><b>SUBTÍTULO</b></label>
          <input name="subtitulo" 
          onChange={(e) => setSubtitulo(e.target.value)} 
          placeholder='subtitulo' />
        </Form.Field>
        <Form.Field className='inputs'>
          <label><b>PREÇO</b></label>
          <input 
          name="valor" 
          placeholder='R$' 
          onChange={(e) => setValor(e.target.value)} 
          />
        </Form.Field>
        <Form.Field className='inputs'>
          <label><b>PREÇO PARCELADO</b></label>
          <input 
          name="valorParcelado" 
          placeholder='R$' 
          onChange={(e) => setValorParcelado(e.target.value)} 
          />
        </Form.Field>
        <Form.Field className='inputs'>
          <label><b>POSIÇÃO</b></label>
          <input 
          name="posicao" 
          placeholder='Nº' 
          onChange={(e) => setPosicao(e.target.value)} 
          />
        </Form.Field>
        <Form.Field className='inputs'>
          <label><b>MARCA</b></label>
          <input 
          name="marca" 
          placeholder='Marca' 
          onChange={(e) => setMarca(e.target.value)} 
          />
        </Form.Field>
        <Form.Field className='inputs'>
          <label><b>IMAGEM</b></label>
          <input 
          name="imagem" 
          placeholder='Imagem' 
          onChange={(e) => setImagem(e.target.value)} 
          />
        </Form.Field>
        <a href="https://modulo3-react-js.vercel.app/read"><Button type='submit' color="success" onClick={sendDataToAPI}>Inserir</Button></a>
      </Form>
      <div className='nada'></div>
    </div>
  )
}
