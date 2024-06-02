import React, {useState} from 'react';
import "./css/map.css"; 
import CardMap from "./brasil-map";
import CarouselCard from "./carousel";

const Map = () => {

  const [selectedSlide, setSelectedSlide] = useState(null);

  const handleStateClick = (event) => {
    setSelectedSlide(event)
    
  };

 
    return (
      <div className="content">
        <div  className="brazil-map card">
            <CardMap onStateClick={handleStateClick}/>
        </div>
        <div className="card-tables card">
            <CarouselCard goToSlide={selectedSlide} />
        </div>
      </div>
    );
};

export default Map;
