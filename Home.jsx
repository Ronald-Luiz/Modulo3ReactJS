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
  document.title="Boom gráfico"
  return (

    

    <Container className="Container">

      <div className="carousel">
        <Carousel>


          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/znMtXTW/CARROSEL1-1-1.png"
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
          
          <h5 className="txt-topPlaca"><b>TOP</b>PLACAS
          <div className="box-posicao-top">
                <div><b id="posicaoN">{1}</b></div>
              </div>
            <img class="image" src="https://i.ibb.co/qRpKPFf/1.jpg" alt="settings" />
          </h5><strong>RTX 3090 -</strong> 
          <p>Placa de Vídeo RTX 3090 Asus NVIDIA GeForce, 24GB, GDDR6X - ROG-STRIX-RTX3090-O24G-GAMING</p>
          <strong>R$ 18.900</strong> 
          <div className="container-comprar"><button>EU QUERO</button></div>

        </div>

        <div className="card blue">
          <h5 className="txt-topPlaca"><b>TOP</b>PLACAS
          <div className="box-posicao-top">
                <div><b id="posicaoN">{2}</b></div>
              </div>
            <img class="image" src="https://i.ibb.co/wShxnP0/2.jpg" alt="settings" />
          </h5><strong>RTX 3080 Ti -</strong> 
          <p>Placa de Vídeo RTX 3080 Ti Trinity Zotac GEFORCE, 12GB GDDR6X, 19Gbps, RGB, LHR, Ray Tracing, DLSS e IceStorm 2.0 - ZT-A30810D-10P</p>
          <strong>R$ 12.500</strong> 
          <div className="container-comprar"><button>EU QUERO</button></div>

        </div>
        

        <div className="card blue">
          <h5 className="txt-topPlaca"><b>TOP</b>PLACAS
          <div className="box-posicao-top">
                <div><b id="posicaoN">{3}</b></div>
              </div>
            <img class="image" src="https://i.ibb.co/cLcqfQV/placa-de-video-gigabyte-radeon-rx-6900-xt-16-gb-gddr6-rgb-fusion-gv-r69xtgaming-oc-16gd-1610649024-o.jpg" alt="settings" />
          </h5><strong>RX 6900 XT -</strong> 
          <p>Placa de Vídeo RX 6900 XT Gigabyte Radeon, 16 GB, GDDR6, RGB Fusion - GV-R69XTGAMING OC-16GD</p>
          <strong>R$ 12.000</strong> 
          <div className="container-comprar"><button>EU QUERO</button></div>


        </div>


       

      </div>

      <div className="vermais"><a href="/produtos">VER MAIS</a></div>


      


    </Container>





  );




}











export default UncontrolledExample;
