import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './css/Produtos.css'

const Example = (props) => {
  document.title="Produtos";

  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    axios.get("https://js0n-server.vercel.app/GPU")
    .then((response) => {
      setPosts(response.data)
    })

    .catch (() =>{
      alert("ERRADO")
    })

  }, [])
  return (

    <div>

      <div className="containerCards">
        
          

            {posts.map((post, key) =>{

              return(

            <div className="card"  key={key}>
                <div className="container-top-placas">
                <h5 className="txt-topPlaca"><b>TOP</b>PLACAS</h5>
              <div className="box-posicao-top">
                <div><b id="posicaoN">{post.posicao}</b></div>
              </div>
              </div>
              <div className='image-div-produto'>
                <img className="image-produto" src={post.imagem} alt="settings" />
              </div>
              <div className="container-txt-produto">
                <p className="txt-produto"><strong className="titulo-produto">{post.nomes} - </strong>{post.subtitulo}</p>
              </div>
              <div className="container-valor">
                <div className="valor" id="valor-produto"><h4> {post.valor}</h4></div>
                <div className="container-comprar"><button>EU QUERO</button></div>
              </div>
            </div>
              )
            })}
      </div>

    </div>

  );
};

export default Example;
