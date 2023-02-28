import React from "react";
import "./Timeline.css";

function Timeline(props: any) {
    return (
        <div className="Timeline">
            <div className="barStart"></div>
            <div className="TimelineHeader">
                <h3>{props.header}</h3>
            </div>
            <div className="barLine"></div>
            <div className="TimelineContent">{props.children}</div>
        </div>
    );
}

export default Timeline;
