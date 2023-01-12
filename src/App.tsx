
import './App.css'
import Searchbar from "./components/Search/Searchbar";
import Clock from "@/components/Clock/Clock";
import React, {useRef, useState} from "react";
import {defineComponent, generateCssRainbowAnimation} from "@/utils";
import {Icon} from "@iconify-icon/react";
import {Link, Outlet} from "react-router-dom";


export function AppMainContent() {
    return (
        <main className="App">
            <Clock/>
            <Searchbar/>

        </main>
    )
}

function App() {


    return (
        <>
            <style>
                {generateCssRainbowAnimation()}

            </style>

                <Outlet/>

            <footer>
                <ul>
                    <li>
                        <a href={"https://github.com/ultraflame4/browhos"}>
                            <Icon icon={"mdi:github"} className={"footer-icon"}/>
                            Github
                        </a>
                    </li>
                    <li>
                        <Link to={"settings"}>
                            <Icon icon={"ic:round-settings"} className={"footer-icon"}/>
                            Settings
                        </Link>
                    </li>
                </ul>
            </footer>

        </>

    )
}

export default App

