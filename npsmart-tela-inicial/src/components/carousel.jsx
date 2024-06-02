import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/carousel.css"; // Estilo personalizado para o carrossel
import Table from "./table";
import data from "./mapData";

const VerticalCarousel = ({ goToSlide }) => {
  const sliderRef = useRef(null); // Use useRef here
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    cssEase: "linear",
    centerMode: true,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  useEffect(() => {
    if (goToSlide !== null && sliderRef.current) {
      console.log(goToSlide);
      sliderRef.current.slickGoTo(goToSlide); // Ensure you are going to the slide specified by goToSlide
    }
  }, [goToSlide]);

  return (
    <div className="carousel-container">
      <div className="vertical-carousel">
        <Slider ref={sliderRef} {...settings}>
          {
            Array.from({length:27}).map((_,index) =>(
              <div key={index} className="carousel-item">
                <div>{data[index].name}</div>
                <Table index={index} updateCount={updateCount} slideIndex={slideIndex} />
              </div>
            ))
          }
       
          {/* Adicione mais itens conforme necessário */}
        </Slider>
      </div>
    </div>
  );
};

export default VerticalCarousel;
