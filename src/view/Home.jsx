import React, { useState } from 'react';
import './css/Home.css'; 
import {
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Col
} from 'reactstrap';




  const items = [
  {
    src: 'https://i.ibb.co/bWCnK4f/1-1-1.jpg',
  altText: '',
  caption: '',
  key: 1,
  },
  {
    src: 'https://i.ibb.co/fdCY7QL/2.jpg',
  altText: '',
  caption: '',
  key: 2,
  },
  {
    src: 'https://i.ibb.co/D4qV6YP/rtx-3080-capa.jpg',
  altText: '',
  caption: '',
  key: 3,
  },



  ];



  function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
  const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
  const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
  setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
  <CarouselItem
    onExiting={() => setAnimating(true)}
    onExited={() => setAnimating(false)}
    key={item.src}
  >
    <img src={item.src} alt={item.altText} />
    <CarouselCaption
      captionText={item.caption}
      captionHeader={item.caption}
    />
  </CarouselItem>
  );
    
  });






return (

<div>
<Container className="Container">

<Col className="SlideCarouse1">

  <Carousel
    activeIndex={activeIndex}
    next={next}
    previous={previous}
    {...args}
  >
    <CarouselIndicators
      items={items}
      activeIndex={activeIndex}
      onClickHandler={goToIndex}
    />
    {slides}
    <CarouselControl
      direction="prev"
      directionText="Previous"
      onClickHandler={previous}
    />
    <CarouselControl
      direction="next"
      directionText="Next"
      onClickHandler={next}
    />

  </Carousel>
  </Col>

  </Container>

  <div className='div2'>

    
  <div className="card blue">
            <h2>RTX 3070
            <img class="image" src="https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SY450_.jpg" alt="settings" />
              <p>Configure o seu sistema</p>
              <Button>Comprar</Button>
            </h2>
            </div>




  </div>


  </div>

  

);

 

 


}




export default Example;