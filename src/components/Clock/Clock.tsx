import {defineComponent} from "@/utils";
import {useEffect, useState} from "react";
import classes from "./Clock.module.css";


const daysOfWeek: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]
const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]



export default defineComponent((props, context) => {
    const [time, setTime] = useState("Timeless")
    const [dateStr, setDateStr] = useState("We are outside the space time continuum")

    useEffect(() => {

        const intervalIndex = setInterval(() => {
            let now = new Date()
            setTime(`${now.getHours()}:${now.getMinutes()}`)
            setDateStr(`${daysOfWeek[now.getDay()+1]}, ${now.getDate()} ${months[now.getMonth()+1]} ${now.getFullYear()}`)

        }, 200)

        return () => {
            clearInterval(intervalIndex)
        }
    })

    return (
        <div className={classes.container}>
            <h2 className={`${classes.date} ${classes.datetimeText}`}>
                {dateStr}
            </h2>
            <h1 className={`${classes.clock} ${classes.datetimeText}`}>
                {time}
            </h1>
        </div>
    )
})
