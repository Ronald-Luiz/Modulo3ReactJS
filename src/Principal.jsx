import React from "react";
import background from "./images/fundo.jpg";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Container
} from 'reactstrap';


function Principal() {
  return (
    <div className="card blue">
    <h2>RTX 3080
    <img class="image" src="https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SY450_.jpg" alt="settings" />
      <p>Configure o seu sistema</p>        
      <Button>Comprar</Button>
    </h2>
  </div>
  );
}

export default Principal;