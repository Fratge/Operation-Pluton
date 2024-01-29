import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./tutoriel.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
  )
