// Importing the necesary modules 
import React, { useState } from 'react';
import "./index.css"; 
import ReactDOM from 'react-dom';
import Home from "./Components/Home";
import Users from "./Components/Users"; 
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom"; 
import Dashboard from './Components/Dashboard';


// Getting the root element 
const rootElement = document.getElementById("root"); 

// Render 
ReactDOM.render(
  <BrowserRouter> 
    <Routes> 
        <Route exach path="/" element={<Home /> } /> 
        <Route path="/dashboard" element={<Dashboard /> } /> 
        <Route path="/users" element={<Users />} /> 
    </Routes>
  </BrowserRouter>, 

  rootElement
); 