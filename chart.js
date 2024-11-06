// src/components/Charts.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Charts = () => {
  const [chartData, setChartData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/sales');
      const data = res.data;
      
      setChartData({
        labels: data.map(item => item.month),
        datasets: [
          {
            label: 'Sales',
            data: data.map(item => item.sales),
            backgroundColor: 'rgba(75,192,192,0.6)',
          },
        ],
      });
    };
    fetchData();
  }, []);
  
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl mb-4">Sales Over Time</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default Charts;
