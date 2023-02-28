import React from "react";
import "./PartCard.css";

function PartCard(props: any) {
    return (
        <div className="PartCard">
            <div className="image">{props.image}</div>
            <div className="description">
                <h3>{props.name}</h3>
                {props.children}
            </div>
        </div>
    );
}

export default PartCard;
