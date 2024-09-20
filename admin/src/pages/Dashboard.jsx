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
    Legend,
} from "recharts";
import { toast } from "react-toastify";

const Dashboard = ({ token }) => {
    const [salesData, setSalesData] = useState({});
    const [topProducts, setTopProducts] = useState([]);

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
    }, [token]);

    return (
        <div className="dashboard">
            <h2>Admin Dashboard</h2>

            <h3>Total Sales: {salesData.total}৳</h3>

            {/* Bar Chart for Top Sold Products */}
            <BarChart width={1000} height={500} data={topProducts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={false} /> {/* Hide the product names */}
                <YAxis tickCount={5} />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantity" fill="#8884d8" />
            </BarChart>

            {/* Pie Chart for Sales Distribution */}
            <PieChart width={400} height={400}>
                <Pie
                    data={topProducts}
                    dataKey="sales"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Dashboard;
