import { useState } from 'react'

let i = 0;

const Home = () => {

  const [numero, setNumero] = useState(0)

  const botao = () => {

    i++;
    setNumero(i);

  }
  return (
    <>
      <h1>HOME</h1>
      <p>Valor: {numero}</p>
      <button onClick={() => botao()}>CLIQUE AQUI</button>


    </>
  );
};

export default Home;