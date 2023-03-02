import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content";
import Paragraph from "./components/Paragraph";
import PartCard from "./components/PartCard";
import Timeline from "./components/Timeline";
import Stm32 from "./resources/Stm32.png";
import Bluetooth from "./resources/Bluetooth.jpg";
import LCD from "./resources/LCD.jpeg";
import Speaker from "./resources/Speaker.jpeg";
import Microphone from "./resources/Microphone.jpeg";
import BlockDiagram from "./resources/Block-Diagram.png";

function App() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

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
            <Content>
                <div className="TabBar">
                    <div
                        className={toggleState === 1 ? "Tab Active-Tab" : "Tab"}
                        onClick={() => toggleTab(1)}
                    >
                        <h2 className="Name">Home</h2>
                    </div>
                    <div
                        className={toggleState === 2 ? "Tab Active-Tab" : "Tab"}
                        onClick={() => toggleTab(2)}
                    >
                        <h2 className="Name">Parts</h2>
                    </div>
                    <div
                        className={toggleState === 3 ? "Tab Active-Tab" : "Tab"}
                        onClick={() => toggleTab(3)}
                    >
                        <h2 className="Name">Updates</h2>
                    </div>
                </div>
                <div
                    className={
                        toggleState === 1 ? "content active-content" : "content"
                    }
                >
                    <Paragraph header="Purpose:">
                        <p>
                            The Snore Detector and Corrector’s purpose is to
                            detect your roommate’s snoring and provide the user
                            with the options to correct this behavior, in the
                            form of flashing lights, loud noises, or both. The
                            user may activate snore countermeasures through
                            their phone, promptly waking the offender and
                            ideally reducing snoring through any means
                            necessary. It will also be able to auto-detect and
                            suppress snoring using an onboard microphone.
                        </p>
                    </Paragraph>
                    <Paragraph
                        header="Block Diagram:"
                        image={BlockDiagram}
                    ></Paragraph>
                    <Paragraph header="Video Demonstration:">
                        <i>-Coming Soon-</i>
                    </Paragraph>
                </div>
                <div
                    className={
                        toggleState === 2 ? "content active-content" : "content"
                    }
                >
                    <div className="Parts">
                        <PartCard name="STM32L476RG" image={Stm32}>
                            <ul>
                                <li>
                                    <a href="https://www.digikey.com/en/products/detail/stmicroelectronics/NUCLEO-L476RG/5347711">
                                        STM32L476RG on Digi-key
                                    </a>
                                </li>
                                <li>
                                    Used as the controller for all the
                                    peripherals
                                </li>
                            </ul>
                        </PartCard>
                        <PartCard name="I2S MEMS Microphone" image={Microphone}>
                            <ul>
                                <li>
                                    <a href="https://www.adafruit.com/product/3421">
                                        I2S MEMS Microphone on Adafruit
                                    </a>
                                </li>
                                <li>Uses I2s Communication standard</li>
                                <li>
                                    Used to detect roommate’s obnoxious snoring
                                </li>
                            </ul>
                        </PartCard>
                        <PartCard name="HC-05 Bluetooth Chip" image={Bluetooth}>
                            <ul>
                                <li>
                                    <a href="https://www.amazon.com/HiLetgo-Wireless-Bluetooth-Transceiver-Arduino/dp/B071YJG8DR/ref=sr_1_5?keywords=bluetooth+hc-05&qid=1677716575&sr=8-5">
                                        HC-05 Bluetooth Chip on Amazon
                                    </a>
                                </li>
                                <li>Uses UART communication standard</li>
                                <li>Interaces with termite</li>
                                <li>
                                    Allows for remote control of the snoring
                                    intervention devices
                                </li>
                            </ul>
                        </PartCard>
                        <PartCard name="Speaker" image={Speaker}>
                            <ul>
                                <li>TBA</li>
                            </ul>
                        </PartCard>
                        <PartCard name="2.8 TFT SPI 240X320 V1.2" image={LCD}>
                            <ul>
                                <li>
                                    <a href="https://protosupplies.com/product/tft-lcd-2-8-240x320-rgb-spi-display-with-touchscreen/">
                                        2.8 TFT SPI 240X320 V1.2 on
                                        Protosupplies
                                    </a>
                                </li>
                                <li>Uses SPI communications standard</li>
                                <li>
                                    Used to project agitating light into
                                    roommate’s eyes
                                </li>
                            </ul>
                        </PartCard>
                    </div>
                </div>
                <div
                    className={
                        toggleState === 3 ? "content active-content" : "content"
                    }
                >
                    <Timeline header="Week 1">
                        <ul>
                            <li>Created a project and defined its purpose</li>
                            <li>
                                Designed and implemented the project site using
                                Github pages with React
                            </li>
                            <li>Created the block diagram for the project</li>
                            <li>
                                Researched and selected parts for the project
                            </li>
                            <li>
                                Determined what communications standard to use.
                                For this project we chose SPI, I2S, and UART
                            </li>
                        </ul>
                    </Timeline>
                    <Timeline header="Week 2">
                        <ul>
                            <li>TBA</li>
                        </ul>
                    </Timeline>
                </div>
            </Content>
        </div>
    );
}

export default App;
