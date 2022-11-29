
import './App.css'
import Searchbar from "./components/Search/Searchbar";
import TimeBanner from "@/components/TimeBanner/TimeBanner";
import {useEffect, useRef} from "react";

const rainbow = [
    "#ff5454",
    "#4bfd75",
    "#373aff"
];
var currentIndex = 0
function App() {
    const appRef = useRef<HTMLElement>(null)

    useEffect(() => {


        const callback = ()=>{
            if (!appRef.current)
                return

            appRef.current.style.setProperty("--rainbow",rainbow[currentIndex])
            currentIndex++
            if (currentIndex >= rainbow.length ) {
                currentIndex=0
            }

        }
        callback()
        const rainbowInterval = setInterval(callback,2500)

        return ()=>{
            clearInterval(rainbowInterval)
        }
    },[appRef.current])

    return (
        <main className="App" ref={appRef}>
            <TimeBanner/>
            <Searchbar/>
        </main>
    )
}

export default App
