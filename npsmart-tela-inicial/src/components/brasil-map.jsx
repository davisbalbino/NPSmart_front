import React, { useEffect } from 'react';
import "./css/cardmap.css"; 
import Highcharts from 'highcharts/highmaps';
import mapDataBR from '@highcharts/map-collection/countries/br/br-all.topo.json';

const CardMap = () => {
  useEffect(() => {
    // Function to create the chart
    const createChart = async () => {
      const topology = mapDataBR;

      // Prepare demo data. The data is joined to map using value of 'hc-key'
      // property by default. See API docs for 'joinBy' for more info on linking
      // data and map.
      const data = [
        { 'hc-key': 'br-sp', value: 10, color: '#FF0000' },
        { 'hc-key': 'br-ma', value: 11, color: '' },
        { 'hc-key': 'br-pa', value: 12, color: '' },
        { 'hc-key': 'br-sc', value: 13, color: '' },
        { 'hc-key': 'br-ba', value: 14, color: '' },
        { 'hc-key': 'br-ap', value: 15, color: '' },
        { 'hc-key': 'br-ms', value: 16, color: '' },
        { 'hc-key': 'br-mg', value: 17, color: '#FF0000' },
        { 'hc-key': 'br-go', value: 18, color: '' },
        { 'hc-key': 'br-rs', value: 19, color: '' },
        { 'hc-key': 'br-to', value: 20, color: '' },
        { 'hc-key': 'br-pi', value: 21, color: '#FF0000' },
        { 'hc-key': 'br-al', value: 22, color: '' },
        { 'hc-key': 'br-pb', value: 23, color: '' },
        { 'hc-key': 'br-ce', value: 24, color: '' },
        { 'hc-key': 'br-se', value: 25, color: '' },
        { 'hc-key': 'br-rr', value: 26, color: '' },
        { 'hc-key': 'br-pe', value: 27, color: '' },
        { 'hc-key': 'br-pr', value: 28, color: '' },
        { 'hc-key': 'br-es', value: 29, color: '#FF0000' },
        { 'hc-key': 'br-rj', value: 30, color: '' },
        { 'hc-key': 'br-rn', value: 31, color: '' },
        { 'hc-key': 'br-am', value: 32, color: '' },
        { 'hc-key': 'br-mt', value: 33, color: '#FF0000' },
        { 'hc-key': 'br-df', value: 34, color: '' },
        { 'hc-key': 'br-ac', value: 35, color: '#FF0000' },
        { 'hc-key': 'br-ro', value: 36, color: '' }
      ];

      // Create the chart
      Highcharts.mapChart('container', {
          chart: {
              map: topology,
              backgroundColor: 'transparent' // Fundo transparente
          },

         

          subtitle: {
              text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/br/br-all.topo.json">Brazil</a>'
          },

          mapNavigation: {
              enabled: true,
              buttonOptions: {
                  verticalAlign: 'bottom'
              }
          },

        

          series: [{
              data: data,
              color: '#0000FF55',
              states: {
                  hover: {
                      color: '#77DD77'
                  }
              },
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }]
      });
    };

    // Call the function to create the chart
    createChart();
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <div className="card-map">
      <div id="container" className="container"></div>
    </div>
  );
};

export default CardMap;
