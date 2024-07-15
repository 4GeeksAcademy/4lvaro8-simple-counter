//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import App from "./App.jsx";

//render your react application
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

