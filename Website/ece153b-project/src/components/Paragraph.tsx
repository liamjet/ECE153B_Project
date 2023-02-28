import React from "react";
import "./Paragraph.css";

function Paragraph(props: any) {
    return (
        <div className="Paragraph">
            <h3 className="Header">{props.header}</h3>
            {props.children}
        </div>
    );
}

export default Paragraph;
