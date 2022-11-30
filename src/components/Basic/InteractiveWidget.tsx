import {defineComponent, useOverlayToggle} from "@/utils";

import React, {MutableRefObject, useRef} from "react";

interface iprops{
    className?: string,
    onToggle?: (toggled:boolean) => void,
}

export default defineComponent<iprops>((props, context) => {
    const btnRef = useRef<HTMLButtonElement>(null)
    const toggleRef = useOverlayToggle<HTMLDivElement>(btnRef, props.onToggle)



    return (
        <div className={`${props.className} iWidget`} ref={toggleRef}>
            <button className={"iWidget-button"} ref={btnRef}></button>
            {props.children}
        </div>
    )
})
