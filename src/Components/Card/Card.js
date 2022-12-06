import React from "react";

function Card(props){
    return [<div className="card-component">
        <img src={props.src} height="100px" alt="kwadrat"></img>
        <h1>Name: {props.h1}</h1>
        {/* <p>Type: {props.p}</p> */}
    </div>]
}

export default Card