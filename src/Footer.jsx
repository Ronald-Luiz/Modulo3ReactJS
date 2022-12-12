import React from "react";
import "./Footer.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";
  
const Footer = () => {
  return (
    <div className="rodape">

    <Box>
  
    <li><a href="#" title="Página Inícial">Página Inícial</a></li>
              <li><a href="#" title="Sobre a Empresa">Sobre a Empresa</a></li>
              <li><a href="#" title="Galeria de Fotos">Galeria de Fotos</a></li>
              <li><a href="#" title="Fale Conosco">Fale Conosco</a></li>

            <h5 style={{ color: "#43AEE3", 
                   textAlign: "center", 
                   marginTop: "10px" }}>
        Todos os direitos reservados - @ProgramadoresCariocas
      </h5>   
     
    </Box>  
    </div>


  );
};
export default Footer;