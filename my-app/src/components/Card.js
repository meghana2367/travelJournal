import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="left">
                <img className = "img" src = {props.imageUrl} alt = ""/>  
            </div>
            <div className="right">
                <div className="card--des">
                    <div>{props.location}</div>
                    <a href = {props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <h3 className="date">{props.startDate} - {props.endDate}</h3>
                <p className="des">
                    {props.description}
                </p>
            </div>
        </div>
    )
}