
import './App.css'
import Searchbar from "./components/Search/Searchbar";
import Clock from "@/components/Clock/Clock";
import React, {useRef, useState} from "react";
import {defineComponent, generateCssRainbowAnimation} from "@/utils";
import {Icon} from "@iconify-icon/react";
import AppDrawer from "@/components/AppDrawer/AppDrawer";
import { CurrentModal } from './core';

const ModalContainer = defineComponent<{currentModal:React.ReactElement|null}>(props => {
    return <div style={{
        position: "fixed",
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)"
    }}>
        {props.currentModal??""}
    </div>
})


function App() {
    const appRef = useRef<HTMLElement>(null)
    const [currentModal, setCurrentModal] = useState<React.ReactElement|null>(null)


    return (
        <CurrentModal.Provider value={{
            setModal(modal) {
                setCurrentModal(modal)
            },
            getModal() {
                return currentModal
            },
        }}>
            <style>
                {generateCssRainbowAnimation()}

            </style>
            <main className="App" ref={appRef}>
                <Clock/>

                <div className={"WidgetRow"}>
                    <Searchbar/>
                    <AppDrawer/>
                </div>
            </main>
            <footer>
                <a href={"https://github.com/ultraflame4/browhos"}>
                    <Icon icon={"mdi:github"} className={"footer-icon"}/>
                    Github
                </a>
            </footer>
            <CurrentModal.Consumer>
                {value => <ModalContainer currentModal={currentModal}/>}
            </CurrentModal.Consumer>
        </CurrentModal.Provider>

    )
}

export default App

