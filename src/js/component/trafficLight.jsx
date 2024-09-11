import React from "react";
import { useState } from 'react';
import { checkPropTypes } from "prop-types";
import { createRoot } from "react-dom/client";
import { FaBicycle } from "react-icons/fa";

let color = "blue"
const TrafficLight = () => {

    return (
        <div className="container wrapper">
            <div className="card lightBox">
                <div className="rectangleDiv">
                <FaBicycle />
                </div>
                <div className="circleDiv1">

                </div>
                <div className="circleDiv2">

                </div>
                <div className="circleDiv3">

                </div>
            </div>
            <div className="container tube"></div>

        </div>

    )



}
// const [ color, setColor] = useState("red")



export default TrafficLight