
import './App.css'
import Searchbar from "./components/Search/Searchbar";
import Clock from "@/components/Clock/Clock";
import {useRef} from "react";
import {generateCssRainbowAnimation} from "@/utils";


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

            </footer>
        </>

    )
}

export default App

