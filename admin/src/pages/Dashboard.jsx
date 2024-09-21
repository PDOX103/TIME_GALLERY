import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { toast } from "react-toastify";

// Function to generate random colors
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Dashboard = ({ token }) => {
  const [salesData, setSalesData] = useState({});
  const [topProducts, setTopProducts] = useState([]);
  const [chartWidth, setChartWidth] = useState(1000); // default chart width

  const fetchSalesData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/order/sales`, {
        headers: { token },
      });
      if (response.data.success) {
        setSalesData({ total: response.data.totalAmount });
        setTopProducts(
          response.data.topProducts.map(([name, details]) => ({
            name,
            quantity: details.quantity,
            sales: details.sales,
          }))
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchSalesData();
    // Responsive chart width calculation
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setChartWidth(width * 0.9);
      } else if (width < 1200) {
        setChartWidth(width * 0.7);
      } else {
        setChartWidth(1000); // default width
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [token]);

  return (
    <div className="dashboard">
      <h2 className="text-center p-2 font-semibold bg-gray-500 text-white md:text-3xl lg:text-3xl rounded-full">
        Admin Dashboard
      </h2>
      <br />

      <h3 className="text-center font-semibold text-black p-3 md:text-2xl lg:text-2xl">
        Total Sales: {salesData.total}৳
      </h3>
      <br />

      {/* Bar Chart for Top Sold Products */}
      <div className="chart-container">
        <BarChart width={chartWidth} height={600} data={topProducts}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={false} /> 
          <YAxis tickCount={5} />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity">
            {topProducts.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getRandomColor()} />
            ))}
          </Bar>
        </BarChart>
      </div>

      <div>
        <h3 className="text-center font-semibold text-black p-3 md:text-2xl lg:text-2xl">
          | Bar Chart for Top Sold Products
        </h3>
      </div>

      {/* Pie Chart with 3D Effect */}
      <div className="flex justify-center">
        <PieChart width={chartWidth / 2} height={chartWidth / 2}>
          <defs>
            <linearGradient id="pieGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#FF8042", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#FFBB28", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <Pie
            data={topProducts}
            dataKey="sales"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="url(#pieGradient)"
            label
            stroke="#8884d8"
            strokeWidth={2}
            cornerRadius={5} // To give rounded corners for 3D effect
            innerRadius={60} // Inner radius to simulate a donut shape, enhancing 3D look
          >
            {topProducts.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getRandomColor()} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <h3 className="text-center font-semibold text-black p-3 md:text-2xl lg:text-2xl">
        | Pie Chart for Sales Distribution
      </h3>
    </div>
  );
};

export default Dashboard;
