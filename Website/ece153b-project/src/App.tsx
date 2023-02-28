import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content";

function App() {
    return (
        <div className="App">
            <div className="Hero">
                <div className="HeroWrapper">
                    <h1 className="Title">
                        Roommate Snore Detector and Corrector
                    </h1>
                    <p className="Subtitle">
                        By: Liam Pang-Naylor, Jacob Eisner - ECE 153b
                    </p>
                </div>
            </div>
            <Content></Content>
        </div>
    );
}

export default App;
