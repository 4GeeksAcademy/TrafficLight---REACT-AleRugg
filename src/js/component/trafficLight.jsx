import React, { useState } from "react";
import { FaBicycle } from "react-icons/fa6";


let backImg = "https://wallpaperaccess.com/full/1619793.jpg"

const TrafficLight = () => {

    const [glow, setGlow] = useState("")

    const isGlowing = (text) => {
        setGlow(text)
    }  

const activateColor = (text) => {
    
    return(

        glow == text ? "boxShadow" : ""

    )
}

const otherColor = (text) => {


return (
    
    glow == text ? "boxShadow newColor" : ""

)


}

const startTrafficLight = () => {
let colors = ["red", "yellow", "green", "purple"];
let index = 0

setInterval(() => {                 // tuve ayuda aqui no me salio a mi 

    index = (index + 1) % colors.length;
    setGlow(colors[index])

}, 2000)
};








    return (
        <div className="container wrapper">
            <div className="card lightBox">
                <div className={`rectangleDiv ${otherColor("purple")}`} 
                >
                    <FaBicycle />
                </div>
            <div  className={`circleDiv1 ${activateColor("red")}`}
                    
                />
            <div className={`circleDiv2 ${activateColor("yellow")}`}
                />
                <div className={`circleDiv3 ${activateColor("green")}`}
                />
            </div>
            <div className="container tube"></div>
            <div className="buttonsWrapper">
            <button onClick={() => isGlowing("red")} className="redBtn">Luz Roja </button>
            <button  onClick={() => isGlowing("yellow")} className="yellowBtn yellow">Luz Amarilla</button>
            <button  onClick={() => isGlowing("green")} className="greenBtn green">Luz Verde</button>
            <button  onClick={() => isGlowing("purple")} className="newLightBtn">Nueva luz</button>
            <button  onClick={() => startTrafficLight()} className="newLightBtn">Animar Semaforo</button>
            </div>
        </div>
    );
};

export default TrafficLight;