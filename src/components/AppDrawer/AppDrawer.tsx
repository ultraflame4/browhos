import {defineComponent} from "@/utils";
import classes from "./AppDrawer.module.css"
import InteractiveWidget from "@/components/Basic/InteractiveWidget";
import {Icon} from "@iconify-icon/react";
import Modal from 'react-modal';
import {useState} from "react";


const AppDrawerItem = defineComponent(props => {
    return (
        <li>
            <Icon icon={"material-symbols:apps"} className={classes.drawerItem}/>
        </li>
    )
})


const AddItemModal= defineComponent(props => {
    return (<div className={classes.AddItemOverlay}>
        <h2>Add Item</h2>
        <input placeholder={"Name"}/>

        <input placeholder={"Link"}/>

        <button>Add</button>
    </div>)
})

export default defineComponent(props => {
    const [addItemModalOpened,setAddItemModalOpened] = useState(false)


    function onAddItem() {
        setAddItemModalOpened(true)
    }

    return( <InteractiveWidget className={classes.AppDrawerContainer}>

        <Icon icon={"material-symbols:apps"} className={classes.drawerIcon}/>
        <ul>
            <AppDrawerItem/>
        </ul>



    </InteractiveWidget>)
})
