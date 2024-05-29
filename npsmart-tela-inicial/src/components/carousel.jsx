import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/carousel.css'; // Estilo personalizado para o carrossel

const VerticalCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true, // Configura para o carrossel sempre rodar
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    centerMode: true, // Mantém o slide no centro da div
  };

  return (
    <div className="vertical-carousel">
      <Slider {...settings}>
        <div className="carousel-item">Slide 1</div>
        <div className="carousel-item">Slide 2</div>
        <div className="carousel-item">Slide 3</div>
        <div className="carousel-item">Slide 4</div>

        {/* Adicione mais itens conforme necessário */}
      </Slider>
    </div>
  );
};

export default VerticalCarousel;