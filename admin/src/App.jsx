import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import List from "./pages/List";
import Add from "./pages/Add";
import { useState } from "react";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";

export const backendUrl = 'https://time-gallery-backend.vercel.app'
export const currency = '৳'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token') : '');

  useEffect(()=>{
    localStorage.setItem('token', token)
  },[token])

  return (
    <div className="bg-green-100 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken}/>
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token}/>} />
                <Route path="/list" element={<List token={token}/>} />
                <Route path="/orders" element={<Orders token={token}/>} />
                <Route path="/dashboard" element={<Dashboard token={token}/>} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
