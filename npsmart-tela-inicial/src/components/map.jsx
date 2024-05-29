import React, { Component } from "react";
import "./css/map.css"; 
import CardMap from "./brasil-map";
import CarouselCard from "./carousel";
class Map extends Component {
    
  render() {
    return (
      <div className="content">
        <div  className="brazil-map card">
            <CardMap/>
        </div>
        <div className="card-tables card">
            <CarouselCard/>
        </div>
      </div>
    );
  }
}

export default Map;
