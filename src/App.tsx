
import './App.css'
import Searchbar from "./components/Search/Searchbar";
import TimeBanner from "@/components/TimeBanner/TimeBanner";
import {useEffect, useRef} from "react";
import {generateCssRainbowAnimation} from "@/utils";


function App() {
    const appRef = useRef<HTMLElement>(null)


    return (
        <>
            <style>
                {generateCssRainbowAnimation()}
            </style>
            <main className="App" ref={appRef}>

                <TimeBanner/>
                <Searchbar/>
            </main>
        </>

    )
}

export default App

