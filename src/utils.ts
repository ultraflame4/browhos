import React, {FunctionComponent, MutableRefObject, PropsWithChildren, useEffect, useRef} from "react";

export function defineComponent<P>(component: FunctionComponent<PropsWithChildren<P>>): FunctionComponent<PropsWithChildren<P>> {

    return component
}

// @ts-ignore
export function useOverlayToggle<T>(triggerElementRef: MutableRefObject<HTMLElement | null> = null, callback: (toggled: boolean) => void = null): MutableRefObject<T> {
    /**
     * @type {MutableRefObject<HTMLElement | null>}
     */
    const ref = useRef(null)
    useEffect(() => {
        // @ts-ignore
        ref.current.tabIndex = -1


        if (triggerElementRef == null) {
            // @ts-ignore
            triggerElementRef = ref
        }
        // @ts-ignore
        const clickListener = (e) => {
            e.stopPropagation()
            // @ts-ignore
            ref.current?.toggleAttribute("toggled")
            // @ts-ignore
            callback?.(true)
        }
        // @ts-ignore
        const blurListener = (/**@type {MouseEvent}*/e) => {
            // @ts-ignore
            if (ref.current.contains(e.target))
                return
            // @ts-ignore
            ref.current?.toggleAttribute("toggled", false)
            // @ts-ignore
            callback?.(false)
        }


        document.addEventListener("click", blurListener)
        // @ts-ignore
        triggerElementRef.current?.addEventListener("click", clickListener)

        return () => {

            document.removeEventListener("click", blurListener)
            // @ts-ignore
            triggerElementRef.current?.removeEventListener("click", clickListener)
        }

    }, [ref.current])
    // @ts-ignore
    return ref;
}


export function generateCssRainbowAnimation() {
    let percentIntervals = 100 / 360;
    let cssString = ""
    cssString += `0%,100%{--rainbow: hsl(0deg,100%,70%);}`

    for (let i = 1; i < 360; i++) {
        cssString += `${i * percentIntervals}%{--rainbow: hsl(${i}deg,100%,70%);}`
    }

    return `@keyframes generatedRainbow {${cssString}}`
}
