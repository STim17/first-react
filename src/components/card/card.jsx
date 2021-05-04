import React from 'react';
import './card-style.css';

export const Card = (props)=>{
    let size = 'size=180x180';
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.m.id}?set=set2&${size}`} alt="imgs"/>
            <h1> {props.m.name} </h1>
        </div>
        
    )
}