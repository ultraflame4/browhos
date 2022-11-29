import {defineComponent} from "@/utils";
import {useEffect, useState} from "react";
import classes from "./Clock.module.css";


export default defineComponent((props, context) => {
    const [time,setTime] = useState("There is no time here. We are outside the space time continuum")

    useEffect(() => {

        const intervalIndex = setInterval(()=>{
            let now  = new Date()
            setTime(`${now.getHours()}:${now.getMinutes()}`)
        },0)

        return ()=>{
            clearInterval(intervalIndex)
        }
    })

    return (<h1 className={classes.timebanner}>
        {time}
    </h1>)
})
