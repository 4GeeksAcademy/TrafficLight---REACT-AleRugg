//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import { FaBicycle } from "react-icons/fa6";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import TrafficLight from "./component/trafficLight";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<TrafficLight/>);

