import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content";
import TabBar from "./components/TabBar";
import Paragraph from "./components/Paragraph";
import PartCard from "./components/PartCard";
import Stm32 from "./resources/Stm32.png";
import Bluetooth from "./resources/Bluetooth.jpg";
import LCD from "./resources/LCD.jpeg";
import Speaker from "./resources/Speaker.jpeg";
import Microphone from "./resources/Microphone.jpeg";

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
            <Content>
                <TabBar></TabBar>
                <Paragraph header="Purpose:">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error facilis quo quam dignissimos aperiam a saepe
                        facere reiciendis sit ipsum officiis maiores, fugiat
                        ipsam molestiae, eveniet id repellendus, corporis alias
                        nam. Numquam dicta minima labore doloribus?
                        Necessitatibus cumque quasi minus a eos tempora
                        molestiae, iste vitae eum repudiandae repellendus rerum
                        culpa accusamus nobis velit dolor, ea exercitationem?
                        Omnis impedit tempore velit voluptatibus placeat
                        cupiditate maxime alias illum aliquid quo a fugiat, rem
                        ratione earum itaque explicabo libero natus ipsam
                        veritatis! Hic, sunt numquam. Rerum voluptates
                        reiciendis magnam id qui temporibus, recusandae mollitia
                        dolorem natus odit quibusdam, dolorum consectetur at
                        incidunt ducimus quisquam nobis repellat labore minus
                        quod voluptatum adipisci! Debitis earum beatae incidunt
                        dignissimos eveniet vitae doloribus labore aspernatur ad
                        dolorem quidem nobis magnam possimus, qui nihil quod
                        inventore fugit, harum tempore nulla? Obcaecati
                        molestiae quo at vero numquam eligendi cupiditate ipsam
                        accusantium, sed assumenda placeat beatae fugit aut
                        nihil. Porro architecto laboriosam nulla? Numquam
                        repellat maxime sapiente obcaecati repellendus delectus
                        blanditiis eum, porro magni, dolorem doloribus. In
                        neque, ipsam consectetur blanditiis facilis ut quo
                        maiores fugit minima eligendi sed odit, sunt, quisquam
                        vero. Nihil, minima cupiditate maxime error id labore
                        impedit reiciendis, tenetur quibusdam dicta, mollitia
                        repellat suscipit rem.
                    </p>
                </Paragraph>
                <Paragraph header="Block Diagram:"></Paragraph>
                <Paragraph header="Video Demonstration:"></Paragraph>
                <div className="cardGrid">
                    <PartCard name="STM32L476RG" image={Stm32}>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas, atque!
                            </li>
                            <li>
                                Deleniti dolores reprehenderit blanditiis
                                incidunt porro cum. Deleniti, provident facilis?
                            </li>
                            <li>
                                Non, fugiat temporibus ut animi sunt ab minus
                                magni maiores.
                            </li>
                        </ul>
                    </PartCard>
                    <PartCard name="Microphone" image={Microphone}>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas, atque!
                            </li>
                            <li>
                                Deleniti dolores reprehenderit blanditiis
                                incidunt porro cum. Deleniti, provident facilis?
                            </li>
                            <li>
                                Non, fugiat temporibus ut animi sunt ab minus
                                magni maiores.
                            </li>
                        </ul>
                    </PartCard>
                    <PartCard name="Bluetooth" image={Bluetooth}>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas, atque!
                            </li>
                            <li>
                                Deleniti dolores reprehenderit blanditiis
                                incidunt porro cum. Deleniti, provident facilis?
                            </li>
                            <li>
                                Non, fugiat temporibus ut animi sunt ab minus
                                magni maiores.
                            </li>
                        </ul>
                    </PartCard>
                    <PartCard name="Speaker" image={Speaker}>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas, atque!
                            </li>
                            <li>
                                Deleniti dolores reprehenderit blanditiis
                                incidunt porro cum. Deleniti, provident facilis?
                            </li>
                            <li>
                                Non, fugiat temporibus ut animi sunt ab minus
                                magni maiores.
                            </li>
                        </ul>
                    </PartCard>
                    <PartCard name="LCD" image={LCD}>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas, atque!
                            </li>
                            <li>
                                Deleniti dolores reprehenderit blanditiis
                                incidunt porro cum. Deleniti, provident facilis?
                            </li>
                            <li>
                                Non, fugiat temporibus ut animi sunt ab minus
                                magni maiores.
                            </li>
                        </ul>
                    </PartCard>
                </div>
            </Content>
        </div>
    );
}

export default App;
