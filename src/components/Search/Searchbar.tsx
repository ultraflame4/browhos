import {defineComponent, useOverlayToggle} from "@/utils";
import classes from "./Searchbar.module.css";
import {Icon} from "@iconify-icon/react";
import React, {useRef} from "react";
import {searchWithSearchEngine} from "@/core";

export default defineComponent(props => {
    const btnRef = useRef<HTMLButtonElement>(null)
    const inpRef = useRef<HTMLInputElement>(null)
    //@ts-ignore
    const toggleRef = useOverlayToggle<HTMLDivElement>(btnRef, (toggled) => {
        if (toggled) {
            inpRef.current?.focus()
        }
    })

    function onSearch() {
        let query = inpRef.current?.value ?? ""
        if (query != "") {
            searchWithSearchEngine(query)
        }
    }


    return (
        <div className={classes.searchContainer} ref={toggleRef}>
            <button className={classes.toggleButton} ref={btnRef}></button>
            <input type={"search"} className={classes.input} ref={inpRef}/>

            <Icon icon={"ri:search-line"} className={classes.searchIcon} onClick={onSearch}/>


        </div>
    )
})
