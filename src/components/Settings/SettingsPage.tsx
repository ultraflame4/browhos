import {DndContext, DragEndEvent, UniqueIdentifier, useDraggable, useDroppable} from "@dnd-kit/core";
import {Link} from "react-router-dom";
import "./SettingsPage.css"
import {defineComponent} from "@/utils";
import React, {useState} from "react";
import {Icon} from "@iconify-icon/react";
import hash from "object-hash"
import app from "@/App";



interface appItem{
    name: string
}

const pinnedApps: appItem[] = [
    {
        name:"A"
    },{
        name:"B"
    },{
        name:"C"
    },{
        name:"D"
    },{
        name:"E"
    },
]

const PinnedAppsList = defineComponent<{moveUp:(index:number)=>void,moveDown:(index:number)=>void,items:appItem[]}>(props => {
    console.log(props.items)
    return(
        <ul className={"pinnedApps"}>
            {props.items.map((value, index) => (
                <li key={`pinnedApp-${index}`}>
                    <p>{value.name}</p>
                    <Icon icon={"ic:outline-keyboard-arrow-up"} className={"pinnedApps-btn"} role={"button"} onClick={()=>props.moveUp(index)}/>
                    <Icon icon={"ic:outline-keyboard-arrow-down"} className={"pinnedApps-btn"} role={"button"} onClick={()=>props.moveDown(index)}/>
                </li>
            ))}
        </ul>
    )
})


export default function SettingsPage() {
    const [appItems, setAppItems] = useState<appItem[]>(pinnedApps)

    function moveUp(index: number) {
        setAppItems(prevState => {

            let current = prevState[index]
            prevState[index] = prevState[index-1]
            prevState[index-1] = current

            return [...prevState]
        })
    }
    function moveDown(index: number) {
        setAppItems(prevState => {
            if (index+1>=prevState.length-1)
                return prevState

            let current = prevState[index]
            prevState[index] = prevState[index+1]
            prevState[index+1] = current
            return [...prevState]
        })
    }


    return (
        <>
            <header>
                <h1 className={"page-title"}>Settings</h1>
                <Link to={"/"}><h2>Back</h2></Link>
            </header>
            <main>
                <h2>Pinned Apps</h2>
                <PinnedAppsList moveUp={moveUp} moveDown={moveDown} items={appItems}/>
            </main>
        </>
    )
}
