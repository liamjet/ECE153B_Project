import React from "react";
import "./Paragraph.css";

function Paragraph(props: any) {
    return (
        <div className="Paragraph">
            <h3>{props.header}</h3>
            <img src={props.image} alt="" />
            {props.children}
        </div>
    );
}

export default Paragraph;
