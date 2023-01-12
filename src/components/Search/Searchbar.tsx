import {defineComponent, useOverlayToggle} from "@/utils";
import "./Searchbar.css";
import {Icon} from "@iconify-icon/react";
import React, {useEffect, useRef} from "react";
import {searchWithSearchEngine} from "@/core";
import InteractiveWidget from "@/components/Basic/InteractiveWidget";

export default defineComponent(props => {

    const inpRef = useRef<HTMLInputElement>(null)
    const isToggled = useRef(false)

    const onToggle = (toggled:boolean) => {
        isToggled.current=toggled
        if (toggled) {
            inpRef.current?.focus()
        }
    }

    function onSearch() {
        let query = inpRef.current?.value ?? ""
        if (query != "") {
            searchWithSearchEngine(query)
        }
    }

    useEffect(() => {
        const callback = (ev:KeyboardEvent) => {
            if (ev.key.toLowerCase() == "enter" && isToggled.current) {
                onSearch()
            }
        }
        document.addEventListener("keypress", callback)
        return () => {
            document.removeEventListener("keypress",callback)
        }
    })


    return (
        <InteractiveWidget className={"searchContainer"} onToggle={onToggle}>
            <input type={"search"} className={"input"} ref={inpRef} placeholder={"Where are you going today?"}/>

            <Icon icon={"ri:search-line"} className={"searchIcon"} onClick={onSearch}/>
        </InteractiveWidget>

    )
})
