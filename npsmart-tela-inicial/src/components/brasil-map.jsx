import React, { useEffect, memo } from 'react';
import "./css/cardmap.css"; 
import Highcharts from 'highcharts/highmaps';
import mapDataBR from '@highcharts/map-collection/countries/br/br-all.topo.json';
import data from './mapData';

const CardMap = memo(({onStateClick}) => {
  useEffect(() => {
    // Function to create the chart
    const createChart = async () => {
      const topology = mapDataBR;

      // Prepare demo data. The data is joined to map using value of 'hc-key'
      // property by default. See API docs for 'joinBy' for more info on linking
      // data and map.
      
      // Create the chart
      const chart = Highcharts.mapChart('container', {
        chart: {
          map: topology,
          backgroundColor: 'transparent' // Fundo transparente
        },
        title: {
          text: 'Huawei Brasil',
          style: {
            color: '#333333',
            fontSize: '20px'
          }
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        series: [{
          data: data,
          name: '',
          color: '#0000FF55',
          states: {
            hover: {
              color: '#FFFF00'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          },
          point: {
            events: {
              click: function (e) {
                onStateClick(e.point.value);
              }
            }
          }
        }]
      });
      
    };
    createChart();
  }, [onStateClick]); 

  return (
    <div className="card-map">
      <div id="container" className="container"></div>
    </div>
  );
});

export default CardMap;
