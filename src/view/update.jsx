import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import { Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./css/create.css"
export default function Update() {
    let history = useNavigate();
    const [nomes, setNomes] = useState('');
    const [valor, setValor] = useState('');
    const [valorParcelado, setValorParcelado] = useState('');
    const [posicao, setPosicao] = useState('');
    const [marca, setMarca] = useState('');
    const [subtitulo, setSubtitulo] = useState('');
    const [imagem, setImagem] = useState('');
    const [id, setId] = useState(null);
    const sendDataToAPI = () => {
        axios.put(`https://js0n-server.vercel.app/GPU/${id}`, {
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

    useEffect(() => {
        setNomes(localStorage.getItem('nomes'));
        setValor(localStorage.getItem('valor'));
        setId(localStorage.getItem('id'))
    }, [])

    return (
        <div className='Main'>
            <div className='nada'></div>
            <Form>
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
                <Link to="/read"><Button type='submit' color='warning' onClick={sendDataToAPI}>Update</Button></Link>
            </Form>
        
        <div className='nada'></div>
        </div>    
    )
}