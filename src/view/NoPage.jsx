
import erro from '../images/erro.png';
import { className } from 'postcss-selector-parser';

const NoPage = () => {
    return (
      <div className='Main'>
        <div className='ErroPage'><h1><b>OPS...</b></h1></div>

        <div className='ErroImg'><img src={erro}/></div>

        <div className='ErroPage2'><h1><b>PÁGINA NÃO ENCONTRADA</b></h1></div>

        <div>
          <ul className='Ul'>
            <li><a href='/'>Voltar a página inicial</a></li>
            <li><a href='/Contatos'>Entre em contato</a></li>
          </ul>

        </div>

        <footer className='Rodape'>Leonardo Macena</footer>

      </div>
    );
  };
  
  export default NoPage;