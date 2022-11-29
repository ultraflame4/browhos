
import './App.css'
import Searchbar from "./components/Search/Searchbar";
import Clock from "@/components/Clock/Clock";
import React, {useRef} from "react";
import {generateCssRainbowAnimation} from "@/utils";
import {Icon} from "@iconify-icon/react";


function App() {
    const appRef = useRef<HTMLElement>(null)


    return (
        <>
            <style>
                {generateCssRainbowAnimation()}

            </style>
            <main className="App" ref={appRef}>
                <Clock/>

                <Searchbar/>
            </main>
            <footer>
                <a href={"https://github.com/ultraflame4/browhos"}>
                    <Icon icon={"mdi:github"} className={"footer-icon"}/>
                    Github
                </a>
            </footer>
        </>

    )
}

export default App

