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
import AMP from "./resources/Amp.jpg";
import Speaker from "./resources/Speaker.jpg";
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
                            The Snore Detector and Corrector will detect the
                            user's roommate’s snoring and provide the user with
                            the necessary options to correct this behavior, in
                            the form of flashing lights, loud noises, or both.
                            The user may activate snore countermeasures through
                            their phone, promptly waking the offender and
                            ideally reducing snoring through any means
                            necessary. It will also be able to auto-detect and
                            suppress snoring using an onboard microphone and
                            automatic snore countermeasures.
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
                        <PartCard
                            name="STM32L476RG"
                            image={Stm32}
                            link="https://www.digikey.com/en/products/detail/stmicroelectronics/NUCLEO-L476RG/5347711"
                        >
                            <ul>
                                <li>
                                    Used as the controller for all the
                                    peripherals
                                </li>
                            </ul>
                        </PartCard>
                        <PartCard
                            name="Adafruit I2S MEMS Microphone"
                            image={Microphone}
                            link="https://www.amazon.com/Adafruit-I2S-MEMS-Microphone-Breakout/dp/B06XNL2GBW"
                        >
                            <ul>
                                <li>
                                    Pure digital microphone which can be
                                    interfaced to by using a SPI block as I2S.
                                </li>
                                <li>
                                    The STM board has seven SPI blocks so there
                                    will be no compatibility issues.
                                </li>
                                <li>
                                    Used to detect roommate’s obnoxious snoring
                                </li>
                            </ul>
                        </PartCard>
                        <PartCard
                            name="HC-05 Bluetooth Chip"
                            image={Bluetooth}
                            link="https://www.amazon.com/HiLetgo-Wireless-Bluetooth-Transceiver-Arduino/dp/B071YJG8DR/ref=sr_1_5?keywords=bluetooth+hc-05&qid=1677716575&sr=8-5"
                        >
                            <ul>
                                <li>Uses UART communication standard</li>
                                <li>Interaces with termite</li>
                                <li>
                                    Allows for remote control of the snoring
                                    intervention devices
                                </li>
                            </ul>
                        </PartCard>
                        <PartCard
                            name="Adafruit I2C Stereo 2.8W Class D Audio Amplifier (SUBJECT TO CHANGE)"
                            image={AMP}
                            link="https://www.amazon.com/Stereo-2-8W-Class-Audio-Amplifier/dp/B096YFBBFF"
                        >
                            <ul>
                                <li>Uses I2C communication standard</li>
                                <li>
                                    Amplifies the signal sent to the speaker
                                </li>
                            </ul>
                        </PartCard>
                        <PartCard
                            name="uxcell Metal Shell Round Internal Magnet Speaker"
                            image={Speaker}
                            link="https://www.amazon.com/Uxcell-a15080600ux0275-Internal-Magnet-Speaker/dp/B0177ABRQ6/ref=sr_1_3?keywords=8+ohm+speaker&qid=1678050488&sr=8-3#customerReviews"
                        >
                            <ul>
                                <li>
                                    Used to play a sound to wake the roommate’s
                                    eyes
                                </li>
                            </ul>
                        </PartCard>
                        <PartCard
                            name="2.8 TFT SPI 240X320 V1.2"
                            image={LCD}
                            link="https://protosupplies.com/product/tft-lcd-2-8-240x320-rgb-spi-display-with-touchscreen/"
                        >
                            <ul>
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
                            <li>Deployed numerous changes to the website</li>
                            <li>
                                Finalized the parts list and ordered all of the
                                parts
                            </li>
                            <li>
                                Implemented the fundamentals of the code for the
                                project
                            </li>
                        </ul>
                    </Timeline>
                    <Timeline header="Week 3">
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
