import React from "react";
import "./PartCard.css";
import Goto from "../resources/goto.webp";

function PartCard(props: any) {
    return (
        <div className="PartCard">
            <a className="PartLink" href={props.link}>
                <div
                    className="image"
                    style={{ backgroundImage: `url(${props.image})` }}
                >
                    <img className="GotoIcon" src={Goto} alt="" />
                </div>
            </a>
            <div className="description">
                <h3>{props.name}</h3>
                {props.children}
            </div>
        </div>
    );
}

export default PartCard;
