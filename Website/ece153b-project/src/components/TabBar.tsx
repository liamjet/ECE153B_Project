import React from "react";
import "./TabBar.css";

function TabBar(props: any) {
    return (
        <div className="TabBar">
            <div className="category">
                <h2 className="Name">Home</h2>
            </div>
            <div className="category">
                <h2 className="Name">Parts</h2>
            </div>
            <div className="category">
                <h2 className="Name">Updates</h2>
            </div>
        </div>
    );
}

export default TabBar;
