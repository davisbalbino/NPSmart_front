import React, { memo } from "react";
import "./css/table.css"; // Estilo personalizado para o carrossel

const Table = memo(() => {
  const telecomData = [
    {
      serviceType: "Mobile",
      users: 10000000,
      antennas: 5000,
      coverage: "95%",
      providers: 4,
      speed: "50 Mbps",
      bandwidth: "20 MHz",
      latency: "30 ms",
      reliability: "99.9%",
      cost: "$30/month",
      region: "Urban",
      growth: "5%",
      activeConnections: 9500000,
      inactiveConnections: 500000,
      upgradePlanned: "Yes",
      fiberCoverage: "70%",
      "4GCoverage": "95%",
      "5GCoverage": "50%",
      technology: "4G/5G",
      customerSatisfaction: "85%",
      complaints: 1000,
    },
    {
      serviceType: "Broadband",
      users: 8000000,
      antennas: 2000,
      coverage: "90%",
      providers: 10,
      speed: "100 Mbps",
      bandwidth: "100 MHz",
      latency: "20 ms",
      reliability: "99.8%",
      cost: "$40/month",
      region: "Suburban",
      growth: "8%",
      activeConnections: 7800000,
      inactiveConnections: 200000,
      upgradePlanned: "Yes",
      fiberCoverage: "80%",
      "4GCoverage": "N/A",
      "5GCoverage": "N/A",
      technology: "Fiber",
      customerSatisfaction: "90%",
      complaints: 800,
    },
    {
      serviceType: "Fixed Line",
      users: 3000000,
      antennas: 1500,
      coverage: "85%",
      providers: 6,
      speed: "10 Mbps",
      bandwidth: "5 MHz",
      latency: "50 ms",
      reliability: "99.5%",
      cost: "$20/month",
      region: "Rural",
      growth: "2%",
      activeConnections: 2900000,
      inactiveConnections: 100000,
      upgradePlanned: "No",
      fiberCoverage: "50%",
      "4GCoverage": "N/A",
      "5GCoverage": "N/A",
      technology: "Copper",
      customerSatisfaction: "75%",
      complaints: 1500,
    },
    {
      serviceType: "Satellite",
      users: 2000000,
      antennas: 800,
      coverage: "75%",
      providers: 3,
      speed: "25 Mbps",
      bandwidth: "15 MHz",
      latency: "600 ms",
      reliability: "98.0%",
      cost: "$50/month",
      region: "Remote",
      growth: "3%",
      activeConnections: 1900000,
      inactiveConnections: 100000,
      upgradePlanned: "Yes",
      fiberCoverage: "0%",
      "4GCoverage": "N/A",
      "5GCoverage": "N/A",
      technology: "Satellite",
      customerSatisfaction: "60%",
      complaints: 2000,
    },
    {
      serviceType: "Fiber",
      users: 5000000,
      antennas: 2500,
      coverage: "92%",
      providers: 7,
      speed: "1 Gbps",
      bandwidth: "200 MHz",
      latency: "10 ms",
      reliability: "99.99%",
      cost: "$70/month",
      region: "Urban/Suburban",
      growth: "10%",
      activeConnections: 4900000,
      inactiveConnections: 100000,
      upgradePlanned: "Yes",
      fiberCoverage: "100%",
      "4GCoverage": "N/A",
      "5GCoverage": "N/A",
      technology: "Fiber",
      customerSatisfaction: "95%",
      complaints: 500,
    },
  ];
  const headers = Object.keys(telecomData[0]);
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {telecomData.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default Table;
