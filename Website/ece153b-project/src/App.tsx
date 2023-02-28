import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content";
import TabBar from "./components/TabBar";
import Paragraph from "./components/Paragraph";
import PartCard from "./components/PartCard";
import Timeline from "./components/Timeline";
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
                <Timeline header="Week 1">
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aliquid error, omnis quae ad fugit et eum
                            architecto dolor nulla veritatis ipsam recusandae
                            asperiores. Amet, optio! Maxime dolor qui commodi
                            nostrum necessitatibus. Vel similique unde quasi
                            sint eaque! Aliquid eveniet praesentium magni
                            dolorum quam nemo vel enim voluptatibus, nobis quod
                            ad.
                        </li>
                        <li>
                            Repellendus placeat, praesentium nam ex odio culpa
                            est magnam aut dolor suscipit, totam iure, cum
                            maxime labore dolorum nulla ipsum eligendi deleniti
                            fuga. Rerum quae numquam libero blanditiis pariatur
                            animi rem veritatis, nobis dicta provident nisi
                            totam tempore impedit atque inventore error dolorum?
                            Rerum, id et ipsam odio quia facilis.
                        </li>
                        <li>
                            Minus quaerat voluptatem fugit inventore in
                            voluptates praesentium consectetur. Ratione non
                            magni in impedit aliquam alias enim, molestias
                            voluptate, libero adipisci assumenda, quos ex
                            excepturi voluptatibus voluptatem! Unde, fuga
                            possimus molestias mollitia repellat, eaque expedita
                            omnis temporibus, dolores delectus ipsam. Officia
                            atque ducimus provident! Accusamus ratione
                            exercitationem laborum rerum esse.
                        </li>
                        <li>
                            Repudiandae nulla ducimus, obcaecati blanditiis,
                            dignissimos commodi aliquam, iure tempora recusandae
                            quas exercitationem nisi quibusdam eum repellat nemo
                            porro dolor consequuntur mollitia sapiente odio
                            ullam! Animi non unde, corporis placeat ratione
                            cupiditate. Beatae eligendi, accusamus aut numquam
                            id enim earum molestiae delectus illum debitis rem
                            explicabo dolorem vel quasi sapiente!
                        </li>
                        <li>
                            Rem asperiores id dolor ea placeat ullam facere?
                            Nihil, porro corrupti explicabo nesciunt, esse
                            asperiores eos commodi sequi repellat ut tempore?
                            Earum non error ad reprehenderit culpa dignissimos
                            tempore veniam perferendis repudiandae tenetur
                            aliquid quaerat voluptatibus impedit, ipsum ipsam
                            provident dolore nam quibusdam expedita dolores
                            dolorem cupiditate temporibus? Minus, repellendus!
                        </li>
                    </ul>
                </Timeline>
                <Timeline header="Week 2">
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aliquid error, omnis quae ad fugit et eum
                            architecto dolor nulla veritatis ipsam recusandae
                            asperiores. Amet, optio! Maxime dolor qui commodi
                            nostrum necessitatibus. Vel similique unde quasi
                            sint eaque! Aliquid eveniet praesentium magni
                            dolorum quam nemo vel enim voluptatibus, nobis quod
                            ad.
                        </li>
                        <li>
                            Repellendus placeat, praesentium nam ex odio culpa
                            est magnam aut dolor suscipit, totam iure, cum
                            maxime labore dolorum nulla ipsum eligendi deleniti
                            fuga. Rerum quae numquam libero blanditiis pariatur
                            animi rem veritatis, nobis dicta provident nisi
                            totam tempore impedit atque inventore error dolorum?
                            Rerum, id et ipsam odio quia facilis.
                        </li>
                        <li>
                            Minus quaerat voluptatem fugit inventore in
                            voluptates praesentium consectetur. Ratione non
                            magni in impedit aliquam alias enim, molestias
                            voluptate, libero adipisci assumenda, quos ex
                            excepturi voluptatibus voluptatem! Unde, fuga
                            possimus molestias mollitia repellat, eaque expedita
                            omnis temporibus, dolores delectus ipsam. Officia
                            atque ducimus provident! Accusamus ratione
                            exercitationem laborum rerum esse.
                        </li>
                        <li>
                            Repudiandae nulla ducimus, obcaecati blanditiis,
                            dignissimos commodi aliquam, iure tempora recusandae
                            quas exercitationem nisi quibusdam eum repellat nemo
                            porro dolor consequuntur mollitia sapiente odio
                            ullam! Animi non unde, corporis placeat ratione
                            cupiditate. Beatae eligendi, accusamus aut numquam
                            id enim earum molestiae delectus illum debitis rem
                            explicabo dolorem vel quasi sapiente!
                        </li>
                        <li>
                            Rem asperiores id dolor ea placeat ullam facere?
                            Nihil, porro corrupti explicabo nesciunt, esse
                            asperiores eos commodi sequi repellat ut tempore?
                            Earum non error ad reprehenderit culpa dignissimos
                            tempore veniam perferendis repudiandae tenetur
                            aliquid quaerat voluptatibus impedit, ipsum ipsam
                            provident dolore nam quibusdam expedita dolores
                            dolorem cupiditate temporibus? Minus, repellendus!
                        </li>
                    </ul>
                </Timeline>
            </Content>
        </div>
    );
}

export default App;
