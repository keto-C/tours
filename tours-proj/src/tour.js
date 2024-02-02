import React, { useState } from "react";


const Tour = (props) => {

    const handleRemove = () => {
        props.removeTour(props.id)
    }

    return (
        <div className="tourComp">
            <div className="imgDiv"><img src={props.image}></img></div>
            <div className="lineOne">
                <h3 className="title">{props.name}</h3>
                <div className="price">{props.price}</div>
            </div>
            <div className="info">{props.info}</div>
            <button className="noInterest" onClick={handleRemove}>no interest</button>
        </div>
    )
}

export default Tour;