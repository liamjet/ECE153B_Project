import React from "react";
import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Paragraph from "./components/Paragraph";
import PartCard from "./components/PartCard";
import Timeline from "./components/Timeline";
import Stm32 from "./resources/Stm32.png";
import Bluetooth from "./resources/Bluetooth.jpg";
import LCD from "./resources/LCD.jpeg";
import Motor from "./resources/Motor.webp";
import Controller from "./resources/Controller.jpeg";
import BlockDiagram from "./resources/Block-Diagram.jpeg";

function App() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    return (
        <div className="App">
            <div className="Hero">
                <div className="HeroWrapper">
                    <h1 className="Title">Roommate Snore Corrector</h1>
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
                            The Snore Corrector will detect the user's
                            roommate’s snoring and provide the user with the
                            necessary options to correct this behavior in the
                            form of flashing lights and nasal stimuli. The user
                            may activate snore countermeasures through their
                            phone, promptly waking the offender and ideally
                            reducing snoring through any means necessary. Users
                            are also able to choose their level of intervention
                            by choosing the specific command they want to send
                            to the device
                        </p>
                        <a href="https://github.com/liamjet/ECE153B_Project">
                            Project on Github
                        </a>
                    </Paragraph>
                    <Paragraph
                        header="Block Diagram:"
                        image={BlockDiagram}
                    ></Paragraph>
                    <Paragraph header="Video Demonstration:">
                        <iframe
                            src="https://www.youtube.com/embed/1YaAhTcsAPk"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
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
                        <PartCard
                            name="28BYJ-48 – 5V Stepper Motor"
                            image={Motor}
                            link="https://www.amazon.com/28BYJ-48-ULN2003-Stepper-Driver-Arduino/dp/B07YRHX73L/ref=asc_df_B07YRHX73L?tag=bingshoppinga-20&linkCode=df0&hvadid=79989562808694&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583589111905551&psc=1"
                        >
                            <ul>
                                <li>
                                    Recieves commands through the controller and
                                    uses half stepping
                                </li>
                                <li>
                                    Used to move the feathers into the
                                    roommate’s nose
                                </li>
                            </ul>
                        </PartCard>
                        <PartCard
                            name="ULN2003 Control Board"
                            image={Controller}
                            link="https://www.amazon.com/28BYJ-48-ULN2003-Stepper-Driver-Arduino/dp/B07YRHX73L/ref=asc_df_B07YRHX73L?tag=bingshoppinga-20&linkCode=df0&hvadid=79989562808694&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583589111905551&psc=1"
                        >
                            <ul>
                                <li>Controlls the stepper motor</li>
                                <li>Communicates with the STM-32 board</li>
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
                            <li>Completed the codebase for the project</li>
                            <li>
                                Connected all of the hardware compoenents - they
                                are all working as expected
                            </li>
                            <li>
                                Pivoted away from using a microphone and
                                switched to using a bluetooth connection and
                                feathers to awake the roomate
                            </li>
                        </ul>
                    </Timeline>
                    <Timeline header="Week 4">
                        <ul>
                            <li>
                                Completed the filming and editing of the demo
                            </li>
                            <li>Presented the project</li>
                        </ul>
                    </Timeline>
                </div>
            </Content>
        </div>
    );
}

export default App;
