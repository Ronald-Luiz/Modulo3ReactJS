import React, { useState } from 'react';
import './css/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import {
  Button,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Col
} from 'reactstrap';

function UncontrolledExample() {
  return (

    <Container className="Container">

      <div className="carousel">
        <Carousel>


          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/bWCnK4f/1-1-1.jpg"
              alt=""
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/fdCY7QL/2.jpg"
              alt=""
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/D4qV6YP/rtx-3080-capa.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p>

              </p>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>
      </div>

      <div className='div2'>

        <div className="card blue">

          <img class="image" src="https://i.ibb.co/znMtXTW/CARROSEL1-1-1.png" alt="" />


        </div>


      </div>


      <div className='div2'>


        <div className="card blue">
          
          <h5 className="txt-topPlaca"><b>TOP</b>PLACAS
          <div className="box-posicao-top">
                <div><b id="posicaoN">{1}</b></div>
              </div>
            <img class="image" src="https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SY450_.jpg" alt="settings" />
          </h5><strong>RX 5700 -</strong> 
          <p>xGB, clock tal, etc, etc, etc, etc, etc</p>
          <strong>R$ 2.000</strong> 
          <div className="container-comprar"><button>EU QUERO</button></div>

        </div>

        <div className="card blue">
          <h5 className="txt-topPlaca"><b>TOP</b>PLACAS
          <div className="box-posicao-top">
                <div><b id="posicaoN">{2}</b></div>
              </div>
            <img class="image" src="https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SY450_.jpg" alt="settings" />
          </h5><strong>RX 5700 -</strong> 
          <p>xGB, clock tal, etc, etc, etc, etc, etc</p>
          <strong>R$ 2.000</strong> 
          <div className="container-comprar"><button>EU QUERO</button></div>

        </div>
        

        <div className="card blue">
          <h5 className="txt-topPlaca"><b>TOP</b>PLACAS
          <div className="box-posicao-top">
                <div><b id="posicaoN">{3}</b></div>
              </div>
            <img class="image" src="https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SY450_.jpg" alt="settings" />
          </h5><strong>RX 5700 -</strong> 
          <p>xGB, clock tal, etc, etc, etc, etc, etc</p>
          <strong>R$ 2.000</strong> 
          <div className="container-comprar"><button>EU QUERO</button></div>


        </div>


       

      </div>

      <div className="vermais"><a href="/produtos">VER MAIS</a></div>


      


    </Container>





  );




}











export default UncontrolledExample;