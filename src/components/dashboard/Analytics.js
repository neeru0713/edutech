import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

const Analytics = () => {
  const generateRandomData = (num) => Array.from({ length: num }, () => Math.floor(Math.random() * 100));
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "User Visits to Courses",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        data: generateRandomData(12),
      },
    ],
  };

  const barOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Courses Completed",
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        data: generateRandomData(12),
        fill: true,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutData = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [
      {
        label: "Course Progress",
        data: [20, 50, 30], 
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        hoverOffset: 4,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
  };

  return (
    <div className="section my-6 h-[80vh] overflow-scroll">
      <h2 className="text-xl font-semibold">Analytics</h2>

      <div className="chart-container mt-6 w-[60%] h-[60%] m-auto">
        <h3 className="text-lg font-semibold">User Visits to Courses (Bar Chart)</h3>
        <Bar data={barData} options={barOptions} />
      </div>

      <div className="chart-container mt-6 w-[60%] h-[60%] m-auto">
        <h3 className="text-lg font-semibold">Courses Completed (Line Chart)</h3>
        <Line data={lineData} options={lineOptions} />
      </div>

      <div className="chart-container mt-6 w-[60%] h-[60%] m-auto pl-24">
        <h3 className="text-lg font-semibold">Course Progress (Doughnut Chart)</h3>
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </div>
    </div>
  );
};

export default Analytics;
